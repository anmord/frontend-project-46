import _ from 'lodash'

const plainFormatter = (filepath1, filepath2) => {
  const getFinalObj = compareFile(filepath1, filepath2)
  //console.log(getFinalObj)
  return getFinalObj
}

const stringify = (value) => {
  if (_.isObject(value)) {
    return '[complex value]'
  }
  if (typeof value === 'string') {
    return `'${value}'`
  }
  return `${value}`
}

const compareFile = (file1, file2, path = '') => {
  const keys = _.union(Object.keys(file1), Object.keys(file2)).sort()

  const result = keys.flatMap((key) => {
    const fullPath = path ? `${path}.${key}` : key

    if (!_.has(file2, key)) {
      return `Property '${fullPath}' was removed`
    }
    if (!_.has(file1, key)) {
      return `Property '${fullPath}' was added with value: ${stringify(file2[key])}`
    }
    if (_.isObject(file1[key]) && _.isObject(file2[key])) {
      return compareFile(file1[key], file2[key], fullPath)
    }
    if (file1[key] !== file2[key]) {
      return `Property '${fullPath}' was updated. From ${stringify(file1[key])} to ${stringify(file2[key])}`
    }
    return []
  })
  return result.join('\n')
}

export default plainFormatter
