import { HumanFriendlyErr } from "../utils/handle-errors.js";

const cypherConfigArray = ['C1', 'C0', 'R1', 'R0', 'A'];

export const getArrayFromArgs = (cipher) => {
    if (cipher) {
        return(cipher.trim().split('-'));
    }
}

export const checkCypherConfig = (cipher) => {
    const cipherArray = getArrayFromArgs(cipher);
    let res;
    cipherArray.forEach(elem => {
        if (!cypherConfigArray.find(elCorrect => elCorrect === elem)) {
            res = false;
            throw new HumanFriendlyErr(`This config - ${elem} is not correct`)
        } else {
            res = true;
        }
    });
    return res;
}