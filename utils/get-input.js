import fs from 'fs';
import { HumanFriendlyErr } from './handle-errors.js';

export const getInput = (array) => {
    let ind = array.findIndex(elem => elem === '-i');
    let indInput = array.findIndex(elem => elem === '--input');
    if (ind !== -1) {
        if (array[ind + 1]) {
            if (!fs.existsSync(array[ind + 1])) {
                throw new HumanFriendlyErr('input file doesn`t exist');
            } else {
                return array[ind + 1];
            } 
        } else {
            throw new HumanFriendlyErr('if you use "-i" - write the name of file');
        }
    } else if (indInput !== -1) {
        if (array[indInput + 1]) {
            if (!fs.existsSync(array[indInput + 1])) {
                throw new HumanFriendlyErr('input file doesn`t exist');
            } else {
                return array[indInput + 1];
            } 
        } else {
            throw new HumanFriendlyErr('if you use "--input" - write the name of file');
        }
    } 
}