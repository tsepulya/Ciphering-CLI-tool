import { cipherInAtbash } from "../../cyphers/atbash.js";

test('atbash should return letter reversed', () => {
    expect(cipherInAtbash('This is secret. Message about "_" symbol!')).toBe('Gsrh rh hvxivg. Nvhhztv zylfg "_" hbnylo!')
})
