#!/usr/bin/env node
import { Command } from 'commander'
import fileTypeDefinition from './src/parsers.js'

const program = new Command()

function command(filepath1, filepath2) {
  const options = program.opts()
  const formatter = options.format || 'stylish'
  fileTypeDefinition(filepath1, filepath2, formatter)
}

program
  .name('gendiff')
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format <type>', 'output format', 'stylish')
  .arguments('<filepath1> <filepath2>')
  .action(command)

program.parse(process.argv)

export default command
