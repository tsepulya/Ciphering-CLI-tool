import { pipeline } from 'stream';
import { writeInConsole, writeInFile } from './writable.js';
import { readfromConsole, readFromFile } from './readable.js';
import { counterTransform } from './transform.js';

export const cipherInConsole = () => {
    pipeline(
        readfromConsole,
        counterTransform,
        writeInConsole,
        (err) => {
            if (err) {
                process.stderr.write('Pipeline failed.', err);
            }
        }
    );
}

export const cipherFromFileToConsole = () => {
    pipeline(
        readFromFile,
        counterTransform,
        writeInConsole,
        (err) => {
            if (err) {
                process.stderr.write('Pipeline failed.', err);
            }
        }
    );
}

export const cipherFromConsoleToFile = () => {
    pipeline(
        readfromConsole,
        counterTransform,
        writeInFile,
        (err) => {
            if (err) {
                process.stderr.write('Pipeline failed.', err);
            }
        }
    );
}

export const cipherInFiles = () => {
    pipeline(
        readFromFile,
        counterTransform,
        writeInFile,
        (err) => {
            if (err) {
                process.stderr.write('Pipeline failed.', err);
            }
        }
    )
}


