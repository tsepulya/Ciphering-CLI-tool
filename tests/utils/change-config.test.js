import { changeConfig, checkDoubles } from "../../utils/change-config.js";


describe('changeConfig', () => {

    const processArgs = ['node', 'my_ciphering_cli', '-c', 'C1-C1-R0-A', '-i', './input.txt', '-o', './output.txt', '-o'];
    const processArgsFull = ['node', 'my_ciphering_cli', '--config', 'C1-C1-R0-A', '--input', './input.txt', '--output', './output.txt', '-o'];

    test('changeConfig should change full configs for short name', () => {
        expect(changeConfig(processArgsFull)).toEqual(processArgs)
    })

})

describe('checkDoubles', () => {

    test('checkDoubles returns truth, if no doubles', () => {
        expect(checkDoubles(['node', 'my_ciphering_cli', '-c', 'C1-C1-R0-A'])).toBeTruthy()
    })
    test('checkDoubles returns false, if doubles', () => {
        expect(checkDoubles(['node', 'my_ciphering_cli', '-c', 'C1-C1-R0-A', '-c'])).toBeFalsy()
    })

})