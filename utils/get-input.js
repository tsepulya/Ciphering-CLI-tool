export const getInput = (array) => {
    let ind = array.findIndex(elem => elem === '-i');
    let indInput = array.findIndex(elem => elem === '--intput');
    if (ind !== -1) {
        return array[ind + 1]; 
    } else if (indInput !== -1) {
        return array[indInput + 1]; 
    } else {
        return './default-output.txt';
    }
}