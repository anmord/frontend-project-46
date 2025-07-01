import fileTypeDefinition from './src/parsers.js'

const gendiff = (filepath1, filepath2, formatter) => {
  return fileTypeDefinition(filepath1, filepath2, formatter)
}

export default gendiff
