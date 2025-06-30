import path from 'path'
import fileTypeDefinition from '../src/parsers.js'

test('Correct_stylish_.json_1', () => {
  const filePath1 = path.resolve('__fixtures__', 'file_json_1_test.json')
  const filePath2 = path.resolve('__fixtures__', 'file_json_2_test.json')

  const expected = `{
    common: {
      + follow: false
        setting1: Value 1
      - setting2: 200
      - setting3: true
      + setting3: null
      + setting4: blah blah
      + setting5: {
            key5: value5
        }
        setting6: {
            doge: {
              - wow:
              + wow: so much
            }
            key: value
          + ops: vops
        }
    }
    group1: {
      - baz: bas
      + baz: bars
        foo: bar
      - nest: {
            key: value
        }
      + nest: str
    }
  - group2: {
        abc: 12345
        deep: {
            id: 45
        }
    }
  + group3: {
        deep: {
            id: {
                number: 45
            }
        }
        fee: 100500
    }
}`
  expect(fileTypeDefinition(filePath1, filePath2, 'stylish')).toBe(expected)
})

test('Correct_stylish_.json_2', () => {
  const filePath1 = path.resolve('__fixtures__', 'file_json_3_test.json')
  const filePath2 = path.resolve('__fixtures__', 'file_json_4_test.json')

  const expected = `{
  + common: {
        follow: false
        setting1: Value 1
        setting3: null
        setting4: blah blah
        setting5: {
            key5: value5
        }
        setting6: {
            key: value
            ops: vops
            doge: {
                wow: so much
            }
        }
    }
  + group1: {
        foo: bar
        baz: bars
        nest: str
    }
  + group3: {
        deep: {
            id: {
                number: 45
            }
        }
        fee: 100500
    }
}`
  expect(fileTypeDefinition(filePath1, filePath2, 'stylish')).toBe(expected)
})

test('Correct_stylish_.yaml_1', () => {
  const filePath1 = path.resolve('__fixtures__', 'file_yaml_1_test.yaml')
  const filePath2 = path.resolve('__fixtures__', 'file_yaml_2_test.yaml')

  const expected = `{
    common: {
      + follow: false
        setting1: Value 1
      - setting2: 200
      - setting3: true
      + setting3: null
      + setting4: blah blah
      + setting5: {
            key5: value5
        }
        setting6: {
            doge: {
              - wow:
              + wow: so much
            }
            key: value
          + ops: vops
        }
    }
    group1: {
      - baz: bas
      + baz: bars
        foo: bar
      - nest: {
            key: value
        }
      + nest: str
    }
  - group2: {
        abc: 12345
        deep: {
            id: 45
        }
    }
  + group3: {
        deep: {
            id: {
                number: 45
            }
        }
        fee: 100500
    }
}`
  expect(fileTypeDefinition(filePath1, filePath2, 'stylish')).toBe(expected)
})


test('Correct_stylish_.yaml_2', () => {
  const filePath1 = path.resolve('__fixtures__', 'file_yaml_3_test.yaml')
  const filePath2 = path.resolve('__fixtures__', 'file_yaml_4_test.yaml')

  const expected = `{
  + common: {
        follow: false
        setting1: Value 1
        setting3: null
        setting4: blah blah
        setting5: {
            key5: value5
        }
        setting6: {
            key: value
            ops: vops
            doge: {
                wow: so much
            }
        }
    }
  + group1: {
        foo: bar
        baz: bars
        nest: str
    }
  + group3: {
        deep: {
            id: {
                number: 45
            }
        }
        fee: 100500
    }
}`
  expect(fileTypeDefinition(filePath1, filePath2, 'stylish')).toBe(expected)
})

test('Correct_plain_.json_1', () => {
  const filePath1 = path.resolve('__fixtures__', 'file_json_1_test.json')
  const filePath2 = path.resolve('__fixtures__', 'file_json_2_test.json')

  const expected = `Property 'common.follow' was added with value: false
Property 'common.setting2' was removed
Property 'common.setting3' was updated. From true to null
Property 'common.setting4' was added with value: 'blah blah'
Property 'common.setting5' was added with value: [complex value]
Property 'common.setting6.doge.wow' was updated. From '' to 'so much'
Property 'common.setting6.ops' was added with value: 'vops'
Property 'group1.baz' was updated. From 'bas' to 'bars'
Property 'group1.nest' was updated. From [complex value] to 'str'
Property 'group2' was removed
Property 'group3' was added with value: [complex value]`
  expect(fileTypeDefinition(filePath1, filePath2, 'plain')).toBe(expected)
})

test('Correct_plain_.json_2', () => {
  const filePath1 = path.resolve('__fixtures__', 'file_json_3_test.json')
  const filePath2 = path.resolve('__fixtures__', 'file_json_4_test.json')

  const expected = `Property 'common' was added with value: [complex value]
Property 'group1' was added with value: [complex value]
Property 'group3' was added with value: [complex value]`
  expect(fileTypeDefinition(filePath1, filePath2, 'plain')).toBe(expected)
})

test('Correct_json_.json_1', () => {
  const filePath1 = path.resolve('__fixtures__', 'file_json_1_test.json')
  const filePath2 = path.resolve('__fixtures__', 'file_json_2_test.json')

  const expected = `[{"key":"common","type":"nested","children":[{"key":"follow","type":"added","value":false},
  {"key":"setting1","type":"unchanged","value":"Value 1"},{"key":"setting2","type":"removed","value":200},
  {"key":"setting3","type":"updated","oldValue":true,"newValue":null},{"key":"setting4","type":"added","value":"blah blah"},
  {"key":"setting5","type":"added","value":{"key5":"value5"}},
  {"key":"setting6","type":"nested","children":[{"key":"doge","type":"nested","children":[{"key":"wow","type":"updated","oldValue":"","newValue":"so much"}]},
  {"key":"key","type":"unchanged","value":"value"},{"key":"ops","type":"added","value":"vops"}]}]},
  {"key":"group1","type":"nested","children":[{"key":"baz","type":"updated","oldValue":"bas","newValue":"bars"},{"key":"foo","type":"unchanged","value":"bar"},
  {"key":"nest","type":"updated","oldValue":{"key":"value"},"newValue":"str"}]},{"key":"group2","type":"removed","value":{"abc":12345,"deep":{"id":45}}},
  {"key":"group3","type":"added","value":{"deep":{"id":{"number":45}},"fee":100500}}]`
  expect(fileTypeDefinition(filePath1, filePath2, 'json')).toEqual(JSON.parse(expected))
})

test('Correct_json_.json_2', () => {
  const filePath1 = path.resolve('__fixtures__', 'file_json_3_test.json')
  const filePath2 = path.resolve('__fixtures__', 'file_json_4_test.json')

  const expected = `[{"key": "common", "type": "added", "value": {"follow": false, "setting1": "Value 1", "setting3": null,
  "setting4": "blah blah", "setting5": {"key5": "value5"}, "setting6": {"doge": {"wow": "so much"}, "key": "value", "ops": "vops"}}},
  {"key": "group1", "type": "added", "value": {"baz": "bars", "foo": "bar", "nest": "str"}}, {"key": "group3", "type": "added",
  "value": {"deep": {"id": {"number": 45}}, "fee": 100500}}]`
  expect(fileTypeDefinition(filePath1, filePath2, 'json')).toEqual(JSON.parse(expected))
})
