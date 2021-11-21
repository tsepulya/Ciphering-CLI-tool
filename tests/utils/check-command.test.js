import {jest} from '@jest/globals';
import { exec } from 'child_process';

import { checkCommand } from "../../utils/check-command.js";
import { cipherInConsole, cipherFromFileToConsole, cipherFromConsoleToFile, cipherInFiles } from '../../streams/pipeline.js';

const mockCipherInConsole = jest.fn(() => cipherInConsole());
const mockCipherFromFileToConsole = jest.fn(() => cipherFromFileToConsole());
const mockCipherFromConsoleToFile = jest.fn(() => cipherFromConsoleToFile());
const mockCipherInFiles = jest.fn(() => cipherInFiles());

const MockCheckCommand = jest.fn();
MockCheckCommand.mockImplementation((args) => {
    checkCommand(args);
    let i = args.findIndex(elem => elem === '-i');
    let o = args.findIndex(elem => elem === '-o');
    if (i === -1 && o === -1 ) {
        mockCipherInConsole();
    } else if (i !== -1 && o === -1) {
        mockCipherFromFileToConsole();
    } else if (i === -1 && o !== -1) {
        mockCipherFromConsoleToFile();
    } else if (args.length === 8) {
        if (i !== -1 && o !== -1) {
            mockCipherInFiles();
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
        exec(`node my_ciphering_cli -c "C1-C1-R0-A" -i "./input.txt -o "./output.txt" -something`, () => {
            expect(stderr).toEqual('you have unnecessary text in command');
            done();
        });
    })

    test('check doubled args', () => {
        processArguments.splice(6, 1, '-i');
        expect(() => checkCommand(processArguments)).toThrow('You provided -i argument more than once');
        exec(`node my_ciphering_cli -c "C1-C1-R0-A" -i "./input.txt" -i "./output.txt"`, () => {
            expect(stderr).toEqual('You provided -i argument more than once');
            done();
        });
    })

    test('check if some configs are absent', () => {
        processArguments.splice(5, 3);
        expect(() => checkCommand(processArguments)).toThrow('you have absent arguments in your command');
        exec(`node my_ciphering_cli -c "C1-C1-R0-A" -i`, () => {
            expect(stderr).toEqual('you have absent arguments in your command');
            done();
        });
    })

    test('check if some configs are absent', () => {
        expect(() => checkCommand(['node', 'my_ciphering_cli', '-c', 'C1-C1-R0-A', './input.txt', './output.txt'])).toThrow('you have absent arguments in your command (-i or -o)');
        exec(`node my_ciphering_cli -c "C1-C1-R0-A" './input.txt' './output.txt'`, () => {
            expect(stderr).toEqual('you have absent arguments in your command (-i or -o)');
            done();
        });
    })

    test('check if cipherInFiles works', () => {
        MockCheckCommand(processArguments);
        expect(mockCipherInFiles).toHaveBeenCalled();
    })

    test('check if cipherInConsole works', () => {
        processArguments.splice(4, 4);
        MockCheckCommand(processArguments);
        expect(mockCipherInConsole).toHaveBeenCalled();
    })

    test('check if cipherFromFileToConsole works', () => {
        processArguments.splice(6, 2);
        MockCheckCommand(processArguments);
        expect(mockCipherFromFileToConsole).toHaveBeenCalled();
    })

    test('check if cipherFromConsoleToFile works', () => {
        processArguments.splice(4, 2);
        MockCheckCommand(processArguments);
        expect(mockCipherFromConsoleToFile).toHaveBeenCalled();
    })

})