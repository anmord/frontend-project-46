import path from 'path'
import parsing from '../src/parse.js'

test('Correct', () => {
  const filePath1 = path.resolve('__fixtures__', 'file1_test.json')
  const filePath2 = path.resolve('__fixtures__', 'file2_test.json')

  const expected = `{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`

  expect(parsing(filePath1, filePath2)).toBe(expected)
})

test('Correct1', () => {
  const filePath1 = path.resolve('__fixtures__', 'file1_non_test.json')
  const filePath2 = path.resolve('__fixtures__', 'file2_non_test.json')

  const expected = `{
  + host: hexlet.io
  + timeout: 20
  + verbose: true
}`

  expect(parsing(filePath1, filePath2)).toBe(expected)
})
