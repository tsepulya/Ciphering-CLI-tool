import { Transform } from 'stream';
import { cipherText } from '../cyphers/cipher-text.js';
import { getArrayFromArgs } from '../cyphers/get-array-from-args.js';
import { findCypherInArgs } from '../cyphers/get-cypher.js';

const configCypher = getArrayFromArgs(findCypherInArgs(process.argv));

class CounterTransform extends Transform {
    _transform(chunk, encoding, callback) {
      try {
        const resultString = cipherText(configCypher, chunk.toString());

        callback(null, resultString);
      } catch (err) {
        callback(err);
      }
    }
  }

export const counterTransform = new CounterTransform();