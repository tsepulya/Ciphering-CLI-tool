import { checkCypherConfig } from '../cyphers/get-array-from-args.js';
import { cipherInConsole, cipherFromFileToConsole, cipherFromConsoleToFile, cipherInFiles } from '../streams/pipeline.js';
import { HumanFriendlyErr } from './handle-errors.js';
import { changeConfig, checkDoubles } from './change-config.js';

export const checkCommand = (processArgs) => {
    let command = changeConfig(processArgs);
    let c = command.findIndex(elem => elem === '-c');
    let i = command.findIndex(elem => elem === '-i');
    let o = command.findIndex(elem => elem === '-o');
    if (c !== -1 && !checkCypherConfig(command[c + 1])) {
    } else if (!checkDoubles(command)) {
        new HumanFriendlyErr('you have doubled arguments in config').write();
    } else if (command.length > 8) {
        new HumanFriendlyErr('you have unnecessary text in command').write();
    } else if (command.length % 2 !== 0) {
        new HumanFriendlyErr('you have absent arguments in your command').write();
    } else if (command.length === 6 && i === -1 && o === -1) {
        new HumanFriendlyErr('you have absent arguments in your command (-i or -o)').write();
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
        new HumanFriendlyErr('you have mistake in your config').write();
    }
}