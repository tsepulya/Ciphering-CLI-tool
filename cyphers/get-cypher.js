import { cipherInCaesar } from "./caesar.js";
import { cipherInAtbash } from "./atbash.js";
import { cipherInRot } from "./rot8.js";

export const getCypher = (cypher, phrase) => {
    switch (cypher) {
        case 'C1':
            return cipherInCaesar(phrase, 1);
        case 'C0':
            return cipherInCaesar(phrase, 0);
        case 'R1':
            return cipherInRot(phrase, 1);
        case 'R0':
            return cipherInRot(phrase, 0);
        case 'A':
            return cipherInAtbash(phrase);
        default:
            console.log('Mistake in cypher');
      }
}

console.log(getCypher('C1', 'Anna'));