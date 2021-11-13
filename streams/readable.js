import fs from 'fs';
import { getInput } from '../utils/get-input.js';

export const readfromConsole = process.stdin;

const intput = getInput(process.argv);

export const readFromFile = fs.createReadStream(intput.trim());