import { checkCommand } from "../../utils/check-command.js";

test('check for doubles', () => {
    expect(() => checkCommand(['node', 'my_ciphering_cli', '-c', '-c', 'C1-C1-R0-A', '-i', './input.txt', '-o', './output.txt'])).toThrow();
})