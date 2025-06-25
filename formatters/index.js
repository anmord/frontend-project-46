import parsing from './parse.js'
import plainFormatter from './plain.js'

const selectFormatters = (filepath1, filepath2, format) => {
  switch (format) {
    case 'plain':
      return plainFormatter(filepath1, filepath2)
    case 'stylish':
    default:
      return parsing(filepath1, filepath2)
  }
}

export default selectFormatters
