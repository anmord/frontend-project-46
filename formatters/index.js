import stylishFormatter from './stylish.js'
import plainFormatter from './plain.js'
import jsonFormatter from './json.js'

const selectFormatters = (filepath1, filepath2, format) => {
  switch (format) {
    case 'plain':
      return plainFormatter(filepath1, filepath2)
    case 'json':
      return jsonFormatter(filepath1, filepath2)
    case 'stylish':
    default:
      return stylishFormatter(filepath1, filepath2)
  }
}

export default selectFormatters
