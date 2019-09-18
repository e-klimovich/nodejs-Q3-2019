import commander from 'commander';

import { reverse, transform, outputFile, convertToFile, convertFromFile } from './actions';
import { ACTION_TYPE } from './constants';

commander
  .option('-a, --action <type>', 'action type')
  .option('-f, --file <path>', 'file path');

commander.on('--help', () => {
  console.log('');
  console.log('Action type:');
  console.log(`  ${ACTION_TYPE.REVERSE}              reverse inputed string`);
  console.log(`  ${ACTION_TYPE.TRANSFORM}            transform inputed string to uppercase`);
  console.log(`  ${ACTION_TYPE.OUTPUT_FILE}           read file specified with -f flag to console`);
  console.log(`  ${ACTION_TYPE.CONVERT_TO_FILE}        write file specified with -f flag from console data`);
  console.log(`  ${ACTION_TYPE.CONVERT_FROM_FILE}      convert csv file from -f flag to data.json (-f required)`);
  console.log('');
});

commander.parse(process.argv);

switch (commander.action) {
  case ACTION_TYPE.REVERSE:
    reverse();
    break;

  case ACTION_TYPE.TRANSFORM:
    transform();
    break;

  case ACTION_TYPE.OUTPUT_FILE:
    outputFile(commander.file);
    break;

  case ACTION_TYPE.CONVERT_TO_FILE:
    convertToFile(commander.file);
    break;

  case ACTION_TYPE.CONVERT_FROM_FILE:
    convertFromFile(commander.file);
    break;

  default: throw Error('action is not specified use --help for more information');
}