import { getCypher, findCypherInArgs } from "../../cyphers/get-cypher.js";

test('getCypher should return phrase with cipher', () => {
    expect(getCypher('C1', 'This is secret. Message about "_" symbol!')).toBe('Uijt jt tfdsfu. Nfttbhf bcpvu "_" tzncpm!')
    expect(getCypher('C0', 'This is secret. Message about "_" symbol!')).toBe('Sghr hr rdbqds. Ldrrzfd zants "_" rxlank!')
    expect(getCypher('R1', 'This is secret. Message about "_" symbol!')).toBe('Bpqa qa amkzmb. Umaaiom ijwcb "_" agujwt!')
    expect(getCypher('R0', 'This is secret. Message about "_" symbol!')).toBe('Lzak ak kwujwl. Ewkksyw stgml "_" kqetgd!')
    expect(getCypher('A', 'This is secret. Message about "_" symbol!')).toBe('Gsrh rh hvxivg. Nvhhztv zylfg "_" hbnylo!')
    expect(() => getCypher('A1', 'This is secret. Message about "_" symbol!')).toThrow()
})

describe('findCypherInArgs', () => {

    let processArguments;

    beforeEach(() => {
        processArguments = ['node', 'my_ciphering_cli', '-c', 'C1-C1-R0-A', '-i', './input.txt', '-o', './output.txt']
    })

    test('findCypherInArgs should return cypher config', () => {
        expect(findCypherInArgs(processArguments)).toBe('C1-C1-R0-A')
        processArguments.splice(2, 1, '--config');
        expect(findCypherInArgs(processArguments)).toBe('C1-C1-R0-A')
    })

    test('findCypherInArgs should throw error with empty config', () => {
        processArguments.splice(3, 5);
        expect(() => findCypherInArgs(processArguments)).toThrow(`config for ciphers Config should be {XY(-)}n`)
    })

    test('findCypherInArgs should throw error with empty config', () => {
        processArguments.splice(2, 6, '--config');
        expect(() => findCypherInArgs(processArguments)).toThrow(`config for ciphers Config should be {XY(-)}n`)
    })

    test('findCypherInArgs should throw error with empty config arg', () => {
        processArguments.splice(2, 1);
        expect(() => findCypherInArgs(processArguments)).toThrow(`There is no config for ciphers Config`)
    })
})

