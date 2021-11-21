import { exec } from 'child_process';
import { getArrayFromArgs, checkCypherConfig } from "../../cyphers/get-array-from-args.js";

test('getArrayFromArgs should return array', () => {
    expect(getArrayFromArgs('C1-C0-R1-R0-A')).toEqual(['C1', 'C0', 'R1', 'R0', 'A'])
    expect(getArrayFromArgs('')).toBeFalsy()
})

test('checkCypherConfig check if array is correct', () => {
    expect(checkCypherConfig('C1-C0-R1-R0-A')).toBeTruthy()
    expect(() => checkCypherConfig('C2')).toThrow('This config - C2 is not correct')
    exec(`node my_ciphering_cli -c "C2" -i "./input.txt -o "./output.txt"`, () => {
        expect(stderr).toEqual('This config - C2 is not correct');
        done();
    });
})
