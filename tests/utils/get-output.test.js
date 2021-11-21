import path from 'path';
import fs from 'fs';
import { getOutput } from "../../utils/get-output.js";

describe('getOutput', () => {

    let processArguments;
    let errorArguments;

    beforeEach(() => {
        processArguments = ['node', 'my_ciphering_cli', '-c', 'C1-C1-R0-A', '-i', './input.txt', '-o', './output.txt']
        errorArguments = ['node', 'my_ciphering_cli', '-c', 'C1-C1-R0-A', '-i', './input.txt', '-o', './fff/output.txt']
    })

    test('getOutput with "-o" should return output file', () => {
        const dir = path.dirname('./output.txt');
        if (fs.existsSync(dir)) {
            expect(getOutput(processArguments)).toBe('./output.txt')
        }
    })

    test('getOutput with "--output" should return output file', () => {
        processArguments.splice(6, 1, '--output')
        const dir = path.dirname('./output.txt');
        if (fs.existsSync(dir)) {
            expect(getOutput(processArguments)).toBe('./output.txt')
        }
    })

    test('getOutput with "-o" should throw err if directory doesnt exist', () => {
        const dir = path.dirname('./fff/output.txt');
        if (!fs.existsSync(dir)) {
            expect(() => getOutput(errorArguments)).toThrow('output directory doesn`t exist')
        }
    })

    test('getOutput with "--output" should throw err if directory doesnt exist', () => {
        errorArguments.splice(6, 1, '--output');
        const dir = path.dirname('./fff/output.txt');
        if (!fs.existsSync(dir)) {
            expect(() => getOutput(errorArguments)).toThrow('output directory doesn`t exist')
        }
    })

    test('getOutput with "-i" should throw err if there is no file name', () => {
        processArguments.splice(7, 1);
        expect(() => getOutput(processArguments)).toThrow('if you use "-o" - write the name of file')
    })

    test('getOutput with "--output" should throw err if there is no file name', () => {
        processArguments.splice(6, 2, '--output');
        expect(() => getOutput(processArguments)).toThrow('if you use "--output" - write the name of file')
    })

    test('getOutput should return undefined if no -o config', () => {
        processArguments.splice(4, 4);
        expect(getOutput(processArguments)).toBeUndefined();
    })

})