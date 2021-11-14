import fs from 'fs';
import { Readable } from 'stream';
import { getInput } from '../utils/get-input.js';

export const readfromConsole = process.stdin;

class ReadStream extends Readable {
    constructor() {
      super();
    }
    _read() {
        try {
            const input = getInput(process.argv);
            fs.readFile(input.trim(), "utf8", (error,chunk) => {
                if (error) {
                    throw error;
                } else {
                    this.push(chunk);
                    this.push(null);
                }
            });
        } catch (err) {
            console.log('err in readable');
        }
    }
}

export const readFromFile = new ReadStream();

