import command from './gendiff.js'

test('Correct', () => {
  const one = {
    "host": "hexlet.io",
    "timeout": 50,
    "proxy": "123.234.53.22",
    "follow": false
  };

  const two = {
    "timeout": 20,
    "verbose": true,
    "host": "hexlet.io"
  };

  expect(command(one, two)).toBe(
  `{
    - follow: false
      host: hexlet.io
    - proxy: 123.234.53.22
    - timeout: 50
    + timeout: 20
    + verbose: true
  }`);
});