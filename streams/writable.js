import fs from 'fs';
import { getOutput } from '../utils/get-output.js';

export const writeInConsole = process.stdout;

const output = getOutput(process.argv);

export const writeInFile = fs.createWriteStream(output, { flags: 'a' });