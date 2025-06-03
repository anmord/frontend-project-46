import path from 'path'
import fs from 'fs'
import _ from 'lodash'

const parsing = (filepath1, filepath2) => {
  const getFinalObj = compareFile(transformation(filepath1), transformation(filepath2))
  console.log(sortArray(getFinalObj))
  return sortArray(getFinalObj)
}

const transformation = (filepath) => {
  const absolutePath = path.resolve(process.cwd(), filepath)
  const fileContent = fs.readFileSync(absolutePath, 'utf8')
  const data = JSON.parse(fileContent)
  return data
}

const compareFile = (file1, file2) => {
  let resultObj = ''
  for (const item in file1) {
    if (_.has(file2, item)) {
      if (file1[item] === file2[item]) {
        resultObj += `\n    ${item}: ${file1[item]}`
      } else {
        resultObj += `\n  - ${item}: ${file1[item]}`
        resultObj += `\n  + ${item}: ${file2[item]}`
      }
    } else {
      resultObj += `\n  - ${item}: ${file1[item]}`
    }
  }
  for (const item in file2) {
    if (!_.has(file1, item)) {
      resultObj += `\n  + ${item}: ${file2[item]}`
    }
  }
  return resultObj
}

const sortArray = (text) => {
  const textInArray = text.split('\n')
  const arrayWithoutSpace = textInArray.slice(1, textInArray.length)
  const sorted = arrayWithoutSpace.sort((a, b) => {
    if (a.slice(4, 5) < b.slice(4, 5)) {
      return -1
    } if (a.slice(4, 5) > b.slice(4, 5)) {
      return 1
    }
    return 0
  })
  const inString = sorted.join('\n')
  const brackets = `{\n${inString}\n}`
  return brackets
}

export default parsing
