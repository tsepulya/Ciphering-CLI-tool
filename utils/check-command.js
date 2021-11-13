import fs from 'fs';
import { checkCypherConfig } from '../cyphers/get-array-from-args.js';
import { cipherInConsole, cipherFromFileToConsole, cipherFromConsoleToFile, cipherInFiles } from '../streams/pipeline.js';
import { getInput } from './get-input.js';

export const checkCommand = (command) => {
    if (command[2] !== '-c' && command[2] !== '--config') {
        process.stderr.write(`The config should start with "-c" or "--config"`);
    } else if (!command[3]) {
        process.stderr.write(`The config should be {XY(-)}n`);
    } else if (!checkCypherConfig(command[3])) {
    } else if (command.length > 8) {
        process.stderr.write('you have unnecessary text in command');
    } else if (command.length === 5 || command.length === 7) {
        process.stderr.write('incorrect config - not full data');
    } else if (command.length === 6) {
        if (command[4] === '-i' || command[4] === '--input') {
                cipherFromFileToConsole();
        } else if (command[4] === '-o' || command[4] === '--output') {
            cipherFromConsoleToFile();
        } else {
            process.stderr.write('you should use -i or -o in command');
        }
    } else if (command.length === 4) {
        cipherInConsole();
    } else if (command.length === 8) {
        if ((command[4] === '-i' || command[4] === '--input') && command[6] === '-o' || command[6] === '--output' ) {
                cipherInFiles();
        } else if ((command[4] === '-o' || command[4] === '--output') && (command[6] === '-i' || command[6] === '--input')) {
                cipherInFiles();
        } else {
            process.stderr.write('you have mistake in input or output config');
        }
    }
}