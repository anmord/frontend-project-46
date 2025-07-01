import fileTypeDefinition from './src/parsers.js';

export const gendiff = (filepath1, filepath2, formatter = 'stylish') => {
  return fileTypeDefinition(filepath1, filepath2, formatter);
};