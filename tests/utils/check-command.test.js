import { checkCommand } from "../../utils/check-command.js";
import {jest} from '@jest/globals';
import { cipherInFiles, cipherInConsole, cipherFromFileToConsole, cipherFromConsoleToFile } from "../../streams/pipeline.js";

const mockCipherInFiles = jest.fn(() => {
    cipherInFiles();
})

const mockCipherInConsole = jest.fn(() => {
    cipherInConsole();
})

const mockCipherFromFileToConsole = jest.fn(() => {
    cipherFromFileToConsole();
})

const mockCipherFromConsoleToFile = jest.fn(() => {
    cipherFromConsoleToFile();
})

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
        expect(() => checkCommand(processArguments)).toThrow('you have doubled arguments in config');
    })

    test('check if some configs are absent', () => {
        processArguments.splice(5, 3);
        expect(() => checkCommand(processArguments)).toThrow('you have absent arguments in your command');
    })

    test('check if some configs are absent', () => {
        expect(() => checkCommand(['node', 'my_ciphering_cli', '-c', 'C1-C1-R0-A', './input.txt', './output.txt'])).toThrow('you have absent arguments in your command (-i or -o)');
    })

    test('check if cipherInFiles works', () => {
        checkCommand(processArguments);
        mockCipherInFiles();
        expect(mockCipherInFiles).toHaveBeenCalled();
    })

    test('check if cipherInConsole works', () => {
        processArguments.splice(4, 4);
        checkCommand(processArguments);
        mockCipherInConsole();
        expect(mockCipherInConsole).toHaveBeenCalled();
    })

    test('check if cipherFromFileToConsole works', () => {
        processArguments.splice(6, 2);
        checkCommand(processArguments);
        mockCipherFromConsoleToFile();
        expect(mockCipherFromConsoleToFile).toHaveBeenCalled();
    })

    test('check if cipherFromConsoleToFile works', () => {
        processArguments.splice(4, 2);
        checkCommand(processArguments);
        mockCipherFromFileToConsole();
        expect(mockCipherFromFileToConsole).toHaveBeenCalled();
    })

})

// npm run test:coverage