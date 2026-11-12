import { digitalPortfolio, printPortfolio } from '../portfolio.js'

const supportedExtension = /\.(?:avif|webp|png|jpe?g)$/i
const anyExtension = /\.[^/]+$/

const printImageModules = import.meta.glob('./assets/print/*.{avif,webp,png,jpg,jpeg}', {
  eager: true,
  query: '?url',
  import: 'default',
})

const digitalImageModules = import.meta.glob('./assets/digital/*.{avif,webp,png,jpg,jpeg}', {
  eager: true,
  query: '?url',
  import: 'default',
})

function imageName(path) {
  return path.split('/').pop().replace(supportedExtension, '')
}

function createImageLookup(modules) {
  const lookup = new Map()

  Object.entries(modules).forEach(([path, url]) => {
    const file = imageName(path)
    const matches = lookup.get(file) ?? []
    matches.push({ path, url })
    lookup.set(file, matches)
  })

  return lookup
}

function optionalText(value) {
  return typeof value === 'string' ? value : ''
}

function resolvePortfolio(section, entries, modules) {
  const lookup = createImageLookup(modules)
  const usedFiles = new Set()
  const successful = []
  const failed = []
  const configuredEntries = Array.isArray(entries) ? entries : []

  if (!Array.isArray(entries)) {
    failed.push({ section, index: null, file: '', status: 'failed', reason: `${section}Portfolio must be an array.` })
  }

  configuredEntries.forEach((entry, index) => {
    const file = typeof entry?.file === 'string' ? entry.file.trim() : ''
    let reason = ''

    if (!file) reason = 'The required `file` value is empty or missing.'
    else if (anyExtension.test(file)) reason = 'The `file` value must not include an extension.'
    else if (usedFiles.has(file)) reason = `The file "${file}" appears more than once in ${section}Portfolio.`
    else if (!lookup.has(file)) reason = `No matching image was found in src/assets/${section}.`
    else if (lookup.get(file).length > 1) reason = `More than one image uses the extension-free filename "${file}".`

    usedFiles.add(file)

    if (reason) {
      failed.push({ section, index, file, status: 'failed', reason })
      return
    }

    successful.push({
      file,
      image: lookup.get(file)[0].url,
      alt: optionalText(entry.alt),
      title: optionalText(entry.title),
      body: optionalText(entry.description),
      upload: { status: 'success', reason: '' },
    })
  })

  return { successful, failed }
}

const printResult = resolvePortfolio('print', printPortfolio, printImageModules)
const digitalResult = resolvePortfolio('digital', digitalPortfolio, digitalImageModules)

export const resolvedPrintPortfolio = printResult.successful
export const resolvedDigitalPortfolio = digitalResult.successful
export const portfolioFailures = [...printResult.failed, ...digitalResult.failed]
