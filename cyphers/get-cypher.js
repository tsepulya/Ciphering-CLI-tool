import { cipherInCaesar } from "./caesar.js";
import { cipherInAtbash } from "./atbash.js";
import { cipherInRot } from "./rot8.js";
import { HumanFriendlyErr } from "../utils/handle-errors.js";

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
            throw new HumanFriendlyErr('Mistake in cypher');
      }
}

export const findCypherInArgs = (array) => {
    let c = array.findIndex(elem => elem === '-c');
    let config = array.findIndex(elem => elem === '--config');
    if (c !== -1) {
        if (array[c + 1]) {
            return array[c + 1];
        } else {
            new HumanFriendlyErr('config for ciphers Config should be {XY(-)}n').write();
        }
    } else if (config !== -1) {
        if (array[config + 1]) {
            return array[config + 1];
        } else {
            new HumanFriendlyErr('config for ciphers Config should be {XY(-)}n').write();
        }
    } else {
        new HumanFriendlyErr(`There is no config for ciphers Config`).write();
    }
}