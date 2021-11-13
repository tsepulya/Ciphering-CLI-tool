import fs from 'fs';
import { checkCypherConfig } from "../cyphers/get-array-from-args.js"

export const checkCommand = (command) => {
    if (command[2] !== '-c' && command[2] !== '--config') {
        process.stderr.write(`The config should start with "-c" or "--config"`);
    } else if (!command[3]) {
        process.stderr.write(`The config should be {XY(-)}n`);
    } else if (!checkCypherConfig(command[3])) {
    } else if (command.length > 8) {
        process.stderr.write('you have unnecessary text in command');
    } else if (command.length === 5 || command.length === 7) {
        process.stderr.write('incorrect config - not full data');
    } else if (command.length === 6) {
        if (command[4] === '-i' || command[4] === '--input') {
            files.input = command[5];
            if (!fs.existsSync(command[5])) {
                process.stderr.write('input file doesn`t exist');
            } else {
                process.stdout.write('запуск функции 2 (из файла в консоль)'); ////////// запуск функции 2 (из файла в консоль)
            }
        } else if (command[4] === '-o' || command[4] === '--output') {
            files.output = command[5]; ////////////// сделать проверку на правильность пути файла
            process.stdout.write(' запуск функции 3 (из консоли в файл)'); ////////// запуск функции 3 (из консоли в файл)
        } else {
            process.stderr.write('you should use -i or -o in command');
        }
    } else if (command.length === 4) {
        process.stdout.write(' запуск функции 1 (из консоли в консоль)'); ///// запуск функции 1 (из консоли в консоль)
    } else if (command.length === 8) {
        if ((command[4] === '-i' || command[4] === '--input') && command[6] === '-o' || command[6] === '--output' ) {
            if (!fs.existsSync(command[5])) {
                process.stderr.write('input file doesn`t exist');
            } else {
                process.stdout.write('запуск функции 4 (из файла в файл)'); ////////// запуск функции 4 (из файла в файл)
            }
        } else if ((command[4] === '-o' || command[4] === '--output') && (command[6] === '-i' || command[6] === '--input')) {
            files.input = command[6];
            if (!fs.existsSync(command[6])) {
                process.stderr.write('input file doesn`t exist');
            } else {
                process.stdout.write('запуск функции 4 (из файла в файл)'); ////////// запуск функции 4 (из файла в файл)
            }
        } else {
            process.stderr.write('you have mistake in input or output config');
        }
    }
}