import fs from 'fs';
import { HumanFriendlyErr } from './handle-errors.js';

export const getInput = (array) => {
    let ind = array.findIndex(elem => elem === '-i');
    let indInput = array.findIndex(elem => elem === '--input');
    if (ind !== -1) {
        if (array[ind + 1]) {
            if (!fs.existsSync(array[ind + 1])) {
                new HumanFriendlyErr('input file doesn`t exist').write();
                return './default-input.txt';
            } else {
                return array[ind + 1];
            } 
        } else {
            return './default-input.txt';
        }
    } else if (indInput !== -1) {
        if (array[indInput + 1]) {
            if (!fs.existsSync(array[indInput + 1])) {
                new HumanFriendlyErr('input file doesn`t exist').write();
                return './default-input.txt';
            } else {
                return array[indInput + 1];
            } 
        } else {
            return './default-input.txt';
        }
    } else {
        return './default-input.txt';
    }
}