import _ from 'lodash'

const parsing = (filepath1, filepath2) => {
  const getFinalObj = compareFile(filepath1, filepath2)
  console.log(getFinalObj)
  return getFinalObj
}

const stringify = (value, depth) => {
  if (!_.isObject(value)) {
    return `${value}`
  }
  const indent = ' '.repeat(depth * 4)
  const closeIndent = ' '.repeat((depth - 1) * 4)
  const lines = Object.entries(value).map(
    ([key, val]) => `${indent}${key}: ${stringify(val, depth + 1)}`
  )
  return `{\n${lines.join('\n')}\n${closeIndent}}`
}

const compareFile = (file1, file2, depth = 1) => {
  const indentForKeys = ' '.repeat(depth * 4 - 2)
  const result = Object.keys({ ...file1, ...file2 })
    .sort()
    .map((key) => {
      if (!_.has(file2, key)) {
        return `${indentForKeys}- ${key}: ${stringify(file1[key], depth + 1)}`
      }
      if (!_.has(file1, key)) {
        return `${indentForKeys}+ ${key}: ${stringify(file2[key], depth + 1)}`
      }
      if (_.isObject(file1[key]) && _.isObject(file2[key])) {
        return `${indentForKeys}  ${key}: ${compareFile(file1[key], file2[key], depth + 1)}`
      }
      if (file1[key] !== file2[key]) {
        return `${indentForKeys}- ${key}: ${stringify(file1[key], depth + 1)}\n${indentForKeys}+ ${key}: ${stringify(file2[key], depth + 1)}`
      }
      return `${indentForKeys}  ${key}: ${stringify(file1[key], depth + 1)}`
    })
  const baseIndent = ' '.repeat((depth - 1) * 4)
  return `{\n${result.join('\n')}\n${baseIndent}}`
}

export default parsing
