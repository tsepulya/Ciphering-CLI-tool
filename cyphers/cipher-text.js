import { getCypher } from "./get-cypher.js";

export const cipherText = (arr, phrase) => {
    var arr1 = arr.slice(0);
    let res;
    for (let i = 0; i < arr.length; i++) {
        res = getCypher(arr1[0], phrase);
        arr1.shift();
        if (arr1.length !== 0) {return cipherText(arr1, res);}
    }
    return res;
}
