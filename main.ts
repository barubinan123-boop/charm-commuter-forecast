import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const forecast =
  'Glimmerhollow: snow falls in slow motion at 2°C, so Eda catches one flake, frames it, and misses three buses admiring it.'

const outDir = join(dirname(fileURLToPath(import.meta.url)), 'output')
mkdirSync(outDir, { recursive: true })
writeFileSync(join(outDir, 'entry.txt'), forecast, 'utf8')
console.log(`Wrote ${forecast.length} characters to output/entry.txt`)
