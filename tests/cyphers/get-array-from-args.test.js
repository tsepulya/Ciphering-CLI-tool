import { getArrayFromArgs, checkCypherConfig } from "../../cyphers/get-array-from-args.js";

test('getArrayFromArgs should return array', () => {
    expect(getArrayFromArgs('C1-C0-R1-R0-A')).toEqual(['C1', 'C0', 'R1', 'R0', 'A'])
    expect(getArrayFromArgs('')).toBeFalsy()
})

test('checkCypherConfig check if array is correct', () => {
    expect(checkCypherConfig('C1-C0-R1-R0-A')).toBeTruthy()
    expect(() => checkCypherConfig('C2')).toThrow('This config - C2 is not correct')
})
