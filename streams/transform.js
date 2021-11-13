import { Transform } from 'stream';
import { cipherText } from '../cyphers/cipher-text.js';
import { getArrayFromArgs } from '../cyphers/get-array-from-args.js';

const configCypher = getArrayFromArgs(process.argv[3]);

class CounterTransform extends Transform {
    _transform(chunk, encoding, callback) {
      try {
        // const resultString = chunk.toString().toUpperCase();
        // const resultString = caesar.cipherInCaesar(chunk.toString(), 1);
        const resultString = cipherText(configCypher ,chunk.toString());

        callback(null, resultString);
      } catch (err) {
        callback(err);
      }
    }
  }

export const counterTransform = new CounterTransform();