import { ReadStream } from '../../streams/readable.js';
import { getInput } from '../../utils/get-input.js';
import {jest} from '@jest/globals';

const mockFile  = jest.fn().mockImplementation(() => {
    const input = getInput(process.argv);
    return input;
  });

const MockReadStream = jest.fn().mockImplementation(() => {
    const readable = new ReadStream();

    try {
        mockFile();
        return readable.read();
    }
    catch {
        process.stderr.write('err in readable');
    }
    
  });

test('ReadStream works correctly', () => {
    try {
        MockReadStream();
    }
    catch {
        expect(err.trim()).to.equal('err in readable')
    }
});
