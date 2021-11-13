export const getOutput = (array) => {
    let ind = array.findIndex(elem => elem === '-o');
    let indOutput = array.findIndex(elem => elem === '--output');
    if (ind !== -1) {
       return array[ind + 1]; 
    } else if (indOutput !== -1) { 
       return array[indOutput + 1]; 
    } else {
        return './default-output.txt';
    }
}