module.exports.cipherInAtbash = (phrase) => {
    let arrayNew = [];
    for (let i = 0; i < phrase.length; i++) {
        let pos = phrase.codePointAt(i);
        if (pos >= 97 && pos <= 122) {
            arrayNew.push(String.fromCodePoint(219 - pos));
        } else if (pos >= 65 && pos <= 90) {
            arrayNew.push(String.fromCodePoint(155 - pos));
        } else {
            arrayNew.push(phrase[i]);
        }
    }
    return arrayNew.join('');
}