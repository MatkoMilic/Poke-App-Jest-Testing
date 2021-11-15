import {basename} from 'path';

export function process(filename: string) {
  return 'module.exports = ' + JSON.stringify(basename(filename)) + ';';
}
