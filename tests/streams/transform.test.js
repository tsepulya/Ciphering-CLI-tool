import { counterTransform } from '../../streams/transform.js';

test('transform stream works correctly', () => {
    expect(counterTransform._transform('some test', 'utf8', () => null));
});