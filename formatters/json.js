import _ from 'lodash'

const jsonFormatter = (filepath1, filepath2) => {
  const getFinalObj = compareFile(filepath1, filepath2)
  // console.log(JSON.stringify(getFinalObj))
  return getFinalObj
}

const compareFile = (file1, file2) => {
  const keys = _.union(Object.keys(file1), Object.keys(file2)).sort()

  const diff = keys.map((key) => {
    if (!_.has(file2, key)) {
      return { key, type: 'removed', value: file1[key] }
    }
    if (!_.has(file1, key)) {
      return { key, type: 'added', value: file2[key] }
    }
    if (_.isObject(file1[key]) && _.isObject(file2[key])) {
      return { key, type: 'nested', children: compareFile(file1[key], file2[key]) }
    }
    if (file1[key] !== file2[key]) {
      return {
        key,
        type: 'updated',
        oldValue: file1[key],
        newValue: file2[key]
      }
    }
    return { key, type: 'unchanged', value: file1[key] }
  })

  return diff
}

export default jsonFormatter
