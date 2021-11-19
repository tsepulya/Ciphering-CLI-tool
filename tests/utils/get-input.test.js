import fs from 'fs';
import { getInput } from "../../utils/get-input.js";

describe('getInput', () => {

    let processArguments;
    let errorArguments;

    beforeEach(() => {
        processArguments = ['node', 'my_ciphering_cli', '-c', 'C1-C1-R0-A', '-i', './input.txt', '-o', './output.txt']
        errorArguments = ['node', 'my_ciphering_cli', '-c', 'C1-C1-R0-A', '-i', './input1.txt', '-o', './output.txt']
    })

    test('getInput with "-i" should return input file', () => {
        if (fs.existsSync('./input.txt')) {
            expect(getInput(processArguments)).toBe('./input.txt')
        }
    })

    test('getInput with "--input" should return input file', () => {
        processArguments.splice(4, 1, '--input')
        if (fs.existsSync('./input.txt')) {
            expect(getInput(processArguments)).toBe('./input.txt')
        } 
    })

    test('getInput with "-i" should throw err if file doesnt exist', () => {
        if (!fs.existsSync('./input1.txt')) {
            expect(() => getInput(errorArguments)).toThrow('input file doesn`t exist')
        }
    })

    test('getInput with "--input" should throw err if file doesnt exist', () => {
        errorArguments.splice(4, 1, '--input')
        if (!fs.existsSync('./input1.txt')) {
            expect(() => getInput(errorArguments)).toThrow('input file doesn`t exist')
        }
    })

    test('getInput with "-i" should throw err if there is no file name', () => {
        processArguments.splice(5, 3);
        expect(() => getInput(processArguments)).toThrow('if you use "-i" - write the name of file')
    })

    test('getInput with "--input" should throw err if there is no file name', () => {
        processArguments.splice(4, 4, '--input');
        expect(() => getInput(processArguments)).toThrow('if you use "--input" - write the name of file')
    })

    test('getInput should return undefined if no -i config', () => {
        processArguments.splice(4, 4);
        expect(getInput(processArguments)).toBeUndefined();
    })

})