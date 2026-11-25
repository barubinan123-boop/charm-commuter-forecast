import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

// The forecast must stay at exactly 121 characters: one line of weather
// for a city that does not exist, ending on a concrete human image.
const MAX_FORECAST_CHARS = 121

const forecast =
  'Glimmerhollow: snow falls in slow motion at 2°C, so Eda catches one flake, frames it, and misses three buses admiring it.'

if (forecast.length !== MAX_FORECAST_CHARS) {
  throw new Error(`forecast must be ${MAX_FORECAST_CHARS} characters, got ${forecast.length}`)
}

const outDir = join(dirname(fileURLToPath(import.meta.url)), 'output')
mkdirSync(outDir, { recursive: true })
writeFileSync(join(outDir, 'entry.txt'), forecast, 'utf8')
console.log(`Wrote ${forecast.length}/${MAX_FORECAST_CHARS} characters to output/entry.txt`)
