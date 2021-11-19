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
    // if (readable.input) {
    //     readable.read()
    // }
    // else {
    //     process.stderr.write('err in readable');
    //     process.exit();
    // }
    
  });
  
//   describe('The pizza CLI', () => {
//     it('should print the correct error', async () => {
//       try {
//         await cmd.execute('path/to/process', ['--sausage']);
//       } catch(err) {
//         expect(err.trim()).to.equal(
//           '  Invalid option --sausage'
//         );
//       }
//     });
//   });


// test('ReadStream', () => {
//     console.log(MockReadStream());
// })

test('ReadStream', () => {
    try {
        MockReadStream();
    }
    catch {
        expect(err.trim()).to.equal('err in readable')
    }
})

// node --experimental-vm-modules node_modules/jest/bin/jest.js --coverage 