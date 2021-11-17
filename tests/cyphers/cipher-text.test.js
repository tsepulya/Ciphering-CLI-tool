import { cipherText } from '../../cyphers/cipher-text.js';

test('cipherText return phrase with cipher', () => {
    expect(cipherText(['C1', 'C1', 'R0', 'A'], 'This is secret. Message about "_" symbol!')).toBe('Myxn xn nbdobm. Tbnnfzb ferlm "_" nhteru!');
})