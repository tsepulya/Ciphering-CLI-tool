import path from 'path';
import fs from 'fs';

export const getOutput = (array) => {
    let ind = array.findIndex(elem => elem === '-o');
    let indOutput = array.findIndex(elem => elem === '--output');
    if (ind !== -1) {
        if (array[ind + 1]) {
            const dir = path.dirname(array[ind + 1]);
            if (!fs.existsSync(dir)) {
                process.stderr.write('output directory doesn`t exist');
                return './default-output.txt';
            }
            else {
                return array[ind + 1];
            }
        } else {
            return './default-output.txt';
        }
    } else if (indOutput !== -1) { 
        if (array[indOutput + 1]) {
            const dir = path.dirname(array[indOutput + 1]);
            if (!fs.existsSync(dir)) {
                process.stderr.write('output directory doesn`t exist');
                return './default-output.txt';
            } else {
                return array[indOutput + 1];
            }
        } else {
            return './default-output.txt';
        }
    } else {
        return './default-output.txt';
    }
}