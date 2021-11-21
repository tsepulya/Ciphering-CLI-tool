import fs from 'fs';
import { Writable } from 'stream';
import { getOutput } from '../utils/get-output.js';

export const writeInConsole = process.stdout;

export class WriteStream extends Writable {
  constructor() {
    super();
  }
  _write(chunk, encoding, callback) {
      try {
        const output = getOutput(process.argv);
        fs.writeFile(output.trim(), chunk.toString(), { flag: 'a' }, err => err);
        callback();
      } catch (err) {
        process.stderr.write('err in writable');
      }
  }
}

export const writeInFile = new WriteStream();
