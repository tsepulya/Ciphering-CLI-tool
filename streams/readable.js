import fs from 'fs';
import { Readable } from 'stream';
import { getInput } from '../utils/get-input.js';

export const readfromConsole = process.stdin;

export class ReadStream extends Readable {
    constructor() {
      super();
      this.input = getInput(process.argv);
    }
    _read() {
        try {
            // const input = getInput(process.argv);
            fs.readFile(this.input.trim(), "utf8", (error,chunk) => {
                if (error) {
                    throw error;
                } else {
                    this.push(chunk);
                    this.push(null);
                }
            });
        } catch (err) {
            process.stderr.write('err in readable');
        }
    }
}

export const readFromFile = new ReadStream();

