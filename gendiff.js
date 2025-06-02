import { Command } from 'commander';
import parsing from './pars.js';

const program = new Command();

const command = (filepath1, filepath2) => {
  parsing(filepath1, filepath2);
};

program
  .name('gendiff')
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format')
  .arguments('<filepath1> <filepath2>')
  .action(command);

program.parse(process.argv);
