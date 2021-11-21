export const cipherInRot = (phrase, type) => {
    let arrayNew = [];
    for (let i = 0; i < phrase.length; i++) {
        let pos = phrase.codePointAt(i);
        if (type === 1) {
            let posNew = pos + 8;
            if ((pos >= 65 && pos <= 90) || (pos >= 97 && pos <= 122)) {
                if ((posNew > 90 && posNew <= 98 ) || (posNew > 122 && posNew <= 130)) {
                    arrayNew.push(String.fromCodePoint(posNew - 26));
                } else {
                    arrayNew.push(String.fromCodePoint(posNew));
                }
            } else {
                arrayNew.push(phrase[i]);
            }
        } else if (type === 0) {
            let posNew = pos - 8;
            if ((pos >= 65 && pos <= 90) || (pos >= 97 && pos <= 122)) {
                if ((posNew >= 57 && posNew < 65) || (posNew >= 89 && posNew < 97)) {
                    arrayNew.push(String.fromCodePoint(pos + 18));
                } else {
                    arrayNew.push(String.fromCodePoint(posNew));
                }
            } else {
            arrayNew.push(phrase[i]);
            }
        }
    }
    return arrayNew.join('');
}