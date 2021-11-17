import { cipherInRot } from '../../cyphers/rot8.js';

test('Rot8 should return a letter with shift 8', () => {
    expect(cipherInRot('This is secret. Message about "_" symbol! Zzoo', 1)).toBe('Bpqa qa amkzmb. Umaaiom ijwcb "_" agujwt! Hhww')
    expect(cipherInRot('This is A secret. Message about "_" symbol!', 0)).toBe('Lzak ak S kwujwl. Ewkksyw stgml "_" kqetgd!')
})