import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { createPortfolioReport } from './scripts/portfolio-report.mjs'

function portfolioReportPlugin() {
  return {
    name: 'ebc-portfolio-report',
    async generateBundle() {
      const report = await createPortfolioReport()

      report.failed.forEach(({ section, index, file, upload }) => {
        this.warn(`Skipped ${section} portfolio entry ${index ?? 'array'}${file ? ` ("${file}")` : ''}: ${upload.reason}`)
      })

      const unusedCount = report.unusedImages.print.length + report.unusedImages.digital.length
      const unsupportedCount = report.unsupportedImages.print.length + report.unsupportedImages.digital.length

      if (unusedCount) this.warn(`${unusedCount} portfolio image(s) are not referenced in portfolio.js. See portfolio-report.json.`)
      if (unsupportedCount) this.warn(`${unsupportedCount} portfolio image(s) use unsupported extensions. See portfolio-report.json.`)

      this.info(`Portfolio: ${report.summary.successful} successful, ${report.summary.failed} skipped.`)
      this.emitFile({
        type: 'asset',
        fileName: 'portfolio-report.json',
        source: `${JSON.stringify(report, null, 2)}\n`,
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), portfolioReportPlugin()],
})
