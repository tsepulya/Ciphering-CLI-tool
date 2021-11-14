import { checkCypherConfig } from '../cyphers/get-array-from-args.js';
import { cipherInConsole, cipherFromFileToConsole, cipherFromConsoleToFile, cipherInFiles } from '../streams/pipeline.js';
import { HumanFriendlyErr } from './handle-errors.js';

export const checkCommand = (command) => {
    let c = command.findIndex(elem => elem === '-c');
    let config = command.findIndex(elem => elem === '--config');
    let i = command.findIndex(elem => elem === '-i');
    let input = command.findIndex(elem => elem === '--input');
    let o = command.findIndex(elem => elem === '-o');
    let output = command.findIndex(elem => elem === '--output');
    if ((c !== -1 && !checkCypherConfig(command[c + 1])) ||  (config !== -1 && !checkCypherConfig(command[config + 1]))) {
    } else if (command.length > 8) {
        new HumanFriendlyErr('you have unnecessary text in command').write();
    } else if (i === -1 && input === -1 && o === -1 && output === -1) {
        cipherInConsole();
    } else if ((i !== -1 || input !== -1) && (o === -1 && output === -1)) {
        cipherFromFileToConsole();
    } else if ((i === -1 && input === -1) && (o !== -1 || output !== -1)) {
        cipherFromConsoleToFile();
    } else if (command.length === 8) {
        if ((i !== -1 || input !== -1) && (o !== -1 || output !== -1)) {
            cipherInFiles();
        }
    }
}