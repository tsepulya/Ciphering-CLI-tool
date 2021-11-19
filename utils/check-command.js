import { checkCypherConfig } from '../cyphers/get-array-from-args.js';
import { cipherInConsole, cipherFromFileToConsole, cipherFromConsoleToFile, cipherInFiles } from '../streams/pipeline.js';
import { HumanFriendlyErr } from './handle-errors.js';
import { changeConfig, checkDoubles } from './change-config.js';

export const checkCommand = (processArgs) => {
    let command = changeConfig(processArgs);
    let c = command.findIndex(elem => elem === '-c');
    let i = command.findIndex(elem => elem === '-i');
    let o = command.findIndex(elem => elem === '-o');
    if (command.length > 8) {
        throw new HumanFriendlyErr('you have unnecessary text in command');
    } else if (!checkDoubles(command)) {
        throw new HumanFriendlyErr('you have doubled arguments in config');
    } else if (c !== -1 && !checkCypherConfig(command[c + 1])) {
    } else if (command.length % 2 !== 0) {
        throw new HumanFriendlyErr('you have absent arguments in your command');
    } else if (command.length === 6 && i === -1 && o === -1) {
        throw new HumanFriendlyErr('you have absent arguments in your command (-i or -o)');
    } else if (i === -1 && o === -1 ) {
        cipherInConsole();
    } else if (i !== -1 && o === -1) {
        cipherFromFileToConsole();
    } else if (i === -1 && o !== -1) {
        cipherFromConsoleToFile();
    } else if (command.length === 8) {
        if (i !== -1 && o !== -1) {
            cipherInFiles();
        }
    } else {
        throw new HumanFriendlyErr('you have mistake in your config');
    }
}