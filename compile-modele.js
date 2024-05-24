import { getModelFromSource } from '@publicodes/tools/compilation'
import fs from 'fs'

const model = getModelFromSource('data', { verbose: true });

fs.writeFileSync('dist/model.json', JSON.stringify(model, null, 2))