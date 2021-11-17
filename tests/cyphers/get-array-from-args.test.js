import { getArrayFromArgs, checkCypherConfig } from "../../cyphers/get-array-from-args.js";

test('getArrayFromArgs should return array', () => {
    expect(getArrayFromArgs('C1-C0-R1-R0-A')).toEqual(['C1', 'C0', 'R1', 'R0', 'A'])
    expect(getArrayFromArgs('')).toBeFalsy()
})

test('checkCypherConfig check if array is correct', () => {
    expect(checkCypherConfig('C1-C0-R1-R0-A')).toBeTruthy()
    // expect(checkCypherConfig('C2-A1')).toThrow()
})

// node --experimental-vm-modules node_modules/jest/bin/jest.js
// node --experimental-vm-modules node_modules/jest/bin/jest.js --coverage
