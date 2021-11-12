export const cipherInCaesar = (phrase, type) => {
    let arrayNew = [];
    for (let i = 0; i < phrase.length; i++) {
        let pos = phrase.codePointAt(i);
        if (type === 1) {
            if (pos === 90) {
                arrayNew.push('A');
            } else if (pos === 122) {
                arrayNew.push('a');
            } else if ((pos >= 65 && pos < 90) || (pos >= 97 && pos < 122)) {
                arrayNew.push(String.fromCodePoint(pos+1));
            } else {
                arrayNew.push(phrase[i]);
            }
        } if (type === 0) {
            if (pos === 65) {
                arrayNew.push('Z');
            } else if (pos === 97) {
                arrayNew.push('z');
            } else if ((pos >= 66 && pos <= 90) || (pos >= 98 && pos <= 122)) {
                arrayNew.push(String.fromCodePoint(pos-1));
            } else {
                arrayNew.push(phrase[i]);
            }
        }
    }
    return arrayNew.join('');
}