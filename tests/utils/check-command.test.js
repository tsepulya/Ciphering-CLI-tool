import { checkCommand } from "../../utils/check-command.js";
import {jest} from '@jest/globals';

const cipherInConsole = jest.fn();
const cipherFromFileToConsole = jest.fn();
const cipherFromConsoleToFile = jest.fn();
const cipherInFiles = jest.fn();

const MockCheckCommand = jest.fn();
MockCheckCommand.mockImplementation((args) => {
    checkCommand(args);
    let i = args.findIndex(elem => elem === '-i');
    let o = args.findIndex(elem => elem === '-o');
    if (i === -1 && o === -1 ) {
        cipherInConsole();
    } else if (i !== -1 && o === -1) {
        cipherFromFileToConsole();
    } else if (i === -1 && o !== -1) {
        cipherFromConsoleToFile();
    } else if (args.length === 8) {
        if (i !== -1 && o !== -1) {
            cipherInFiles();
        }
    }
});

describe('checkCommand', () => {

    let processArguments;

    beforeEach(() => {
        processArguments = ['node', 'my_ciphering_cli', '-c', 'C1-C1-R0-A', '-i', './input.txt', '-o', './output.txt']
    })

    test('check extra args', () => {
        processArguments.push('-something')
        expect(() => checkCommand(processArguments)).toThrow('you have unnecessary text in command');
    })

    test('check doubled args', () => {
        processArguments.splice(6, 1, '-i');
        expect(() => checkCommand(processArguments)).toThrow('You provided -i argument more than once');
    })

    test('check if some configs are absent', () => {
        processArguments.splice(5, 3);
        expect(() => checkCommand(processArguments)).toThrow('you have absent arguments in your command');
    })

    test('check if some configs are absent', () => {
        expect(() => checkCommand(['node', 'my_ciphering_cli', '-c', 'C1-C1-R0-A', './input.txt', './output.txt'])).toThrow('you have absent arguments in your command (-i or -o)');
    })

    test('check if cipherInFiles works', () => {
        MockCheckCommand(processArguments);
        expect(cipherInFiles).toHaveBeenCalled();
    })

    test('check if cipherInConsole works', () => {
        processArguments.splice(4, 4);
        MockCheckCommand(processArguments);
        expect(cipherInConsole).toHaveBeenCalled();
    })

    test('check if cipherFromFileToConsole works', () => {
        processArguments.splice(6, 2);
        MockCheckCommand(processArguments);
        expect(cipherFromFileToConsole).toHaveBeenCalled();
    })

    test('check if cipherFromConsoleToFile works', () => {
        processArguments.splice(4, 2);
        MockCheckCommand(processArguments);
        expect(cipherFromConsoleToFile).toHaveBeenCalled();
    })

})