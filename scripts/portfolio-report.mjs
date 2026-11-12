import { readdir } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { digitalPortfolio, printPortfolio } from '../portfolio.js'

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const supportedExtensions = new Set(['.avif', '.webp', '.png', '.jpg', '.jpeg'])

function entryFile(entry) {
  return typeof entry?.file === 'string' ? entry.file.trim() : ''
}

async function inspectSection(section, configuredEntries) {
  const folder = path.join(projectRoot, 'src', 'assets', section)
  const directoryEntries = await readdir(folder, { withFileTypes: true })
  const supportedImages = directoryEntries
    .filter((entry) => entry.isFile() && supportedExtensions.has(path.extname(entry.name).toLowerCase()))
    .map((entry) => entry.name)
  const unsupportedImages = directoryEntries
    .filter((entry) => entry.isFile() && !entry.name.startsWith('.') && !supportedExtensions.has(path.extname(entry.name).toLowerCase()))
    .map((entry) => entry.name)

  const imageLookup = new Map()
  supportedImages.forEach((name) => {
    const file = path.basename(name, path.extname(name))
    const matches = imageLookup.get(file) ?? []
    matches.push(name)
    imageLookup.set(file, matches)
  })

  const entries = Array.isArray(configuredEntries) ? configuredEntries : []
  const usedFiles = new Set()
  const results = []

  if (!Array.isArray(configuredEntries)) {
    results.push({
      section,
      index: null,
      file: '',
      upload: { status: 'failed', reason: `${section}Portfolio must be an array.` },
    })
  }

  entries.forEach((entry, index) => {
    const file = entryFile(entry)
    let reason = ''

    if (!file) reason = 'The required `file` value is empty or missing.'
    else if (path.extname(file)) reason = 'The `file` value must not include an extension.'
    else if (usedFiles.has(file)) reason = `The file "${file}" appears more than once in ${section}Portfolio.`
    else if (!imageLookup.has(file)) reason = `No matching image was found in src/assets/${section}.`
    else if (imageLookup.get(file).length > 1) reason = `More than one image uses the extension-free filename "${file}".`

    usedFiles.add(file)
    results.push({
      section,
      index,
      file,
      upload: reason
        ? { status: 'failed', reason }
        : { status: 'success', reason: '' },
    })
  })

  const configuredFiles = new Set(entries.map(entryFile).filter(Boolean))
  const unusedImages = supportedImages.filter((name) => {
    const file = path.basename(name, path.extname(name))
    return !configuredFiles.has(file)
  })

  return { results, unusedImages, unsupportedImages }
}

export async function createPortfolioReport() {
  const [print, digital] = await Promise.all([
    inspectSection('print', printPortfolio),
    inspectSection('digital', digitalPortfolio),
  ])
  const entries = [...print.results, ...digital.results]
  const successful = entries.filter((entry) => entry.upload.status === 'success')
  const failed = entries.filter((entry) => entry.upload.status === 'failed')

  return {
    generatedAt: new Date().toISOString(),
    summary: {
      successful: successful.length,
      failed: failed.length,
    },
    entries,
    failed,
    unusedImages: {
      print: print.unusedImages,
      digital: digital.unusedImages,
    },
    unsupportedImages: {
      print: print.unsupportedImages,
      digital: digital.unsupportedImages,
    },
  }
}
