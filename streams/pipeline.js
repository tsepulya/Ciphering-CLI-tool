import { pipeline } from 'stream';
import { writeInConsole, writeInFile } from './writable.js';
import { readfromConsole, readFromFile } from './readable.js';
import { counterTransform } from './transform.js';
import { HumanFriendlyErr } from '../utils/handle-errors.js';

export const cipherInConsole = () => {
    pipeline(
        readfromConsole,
        counterTransform,
        writeInConsole,
        (err) => {
            if (err) {
                new HumanFriendlyErr('Pipeline failed').write();
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
                new HumanFriendlyErr('Pipeline failed').write();
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
                new HumanFriendlyErr('Pipeline failed').write();
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
                new HumanFriendlyErr('Pipeline failed').write();
            }
        }
    )
}


