import fs from 'fs'
import path from 'path'
import yaml from 'js-yaml'
import selectFormatters from '../formatters/index.js'

const fileTypeDefinition = (filepath1, filepath2, formatter) => {
  const extname = path.extname(filepath1)
  const absolutePath1 = path.resolve(process.cwd(), filepath1)
  const absolutePath2 = path.resolve(process.cwd(), filepath2)
  const fileContent1 = fs.readFileSync(absolutePath1, 'utf8')
  const fileContent2 = fs.readFileSync(absolutePath2, 'utf8')

  switch (extname) {
    case '.yaml':
    case '.yml':
      return selectFormatters(yaml.load(fileContent1), yaml.load(fileContent2), formatter)
    case '.json':
      return selectFormatters(JSON.parse(fileContent1), JSON.parse(fileContent2), formatter)
    default:
      console.log(`Unsupported file extension: ${extname}`)
      return undefined
  }
}

export default fileTypeDefinition
