import { WriteStream } from '../../streams/writable.js';
// import fs from 'fs';
// import { Writable } from 'stream';
import {jest} from '@jest/globals'

// const MockWriteStream = new WriteStream();

//   const mockCreateWriteStream = jest.fn().mockImplementation(() => {
//     MockWriteStream.write();
//     return MockWriteStream;
//   });

const mockChunk = jest.fn().mockImplementation(() => {
    return mockChunk;
  });

const MockWriteStream = jest.fn().mockImplementation(() => {
    const writable = new WriteStream();
    return writable.write(mockChunk.toString());
  });
  


test('WriteStream', () => {
    console.log(MockWriteStream());
})

// const myMock = jest.fn();
// console.log('mock:::::::::::::::::::::::::::::::::::')
// console.log(MockWriteStream());
// let a = myMock.mockImplementation(() => 42);
// console.log(a());