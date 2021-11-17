import { cipherInCaesar } from '../../cyphers/caesar.js';

test('Caesar should return a letter with shift 1', () => {
    expect(cipherInCaesar('This is secret. Message about "_" symbol! Zzoo', 1)).toBe('Uijt jt tfdsfu. Nfttbhf bcpvu "_" tzncpm! Aapp')
    expect(cipherInCaesar('This is A secret. Message about "_" symbol!', 0)).toBe('Sghr hr Z rdbqds. Ldrrzfd zants "_" rxlank!')
})