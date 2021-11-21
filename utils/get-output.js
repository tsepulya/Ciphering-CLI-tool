import path from 'path';
import fs from 'fs';
import { HumanFriendlyErr } from './handle-errors.js';

export const getOutput = (array) => {
    let ind = array.findIndex(elem => elem === '-o');
    let indOutput = array.findIndex(elem => elem === '--output');
    if (ind !== -1) {
        if (array[ind + 1]) {
            const dir = path.dirname(array[ind + 1]);
            if (!fs.existsSync(dir)) {
                new HumanFriendlyErr('output directory doesn`t exist').write();
            } else {
                return array[ind + 1];
            }
        } else {
            new HumanFriendlyErr('if you use "-o" - write the name of file').write();
        }
    } else if (indOutput !== -1) { 
        if (array[indOutput + 1]) {
            const dir = path.dirname(array[indOutput + 1]);
            if (!fs.existsSync(dir)) {
                new HumanFriendlyErr('output directory doesn`t exist').write();
            } else {
                return array[indOutput + 1];
            }
        } else {
            new HumanFriendlyErr('if you use "--output" - write the name of file').write();
        }
    }
}