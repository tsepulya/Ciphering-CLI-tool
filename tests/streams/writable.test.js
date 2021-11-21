import { WriteStream } from '../../streams/writable.js';
import {jest} from '@jest/globals'

const mockChunk = jest.fn().mockImplementation(() => {
    return mockChunk;
  });

const MockWriteStream = jest.fn().mockImplementation(() => {
    const writable = new WriteStream();
    return writable.write(mockChunk.toString());
});

test('WriteStream works correctly', () => {
    expect(MockWriteStream()).toBeTruthy();
})

