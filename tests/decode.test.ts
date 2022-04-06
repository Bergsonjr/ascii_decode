import decode from '../src/controllers/decode';

describe('Decode', () => {
    it('#exec for "10122122150161110101111177"', () => {
        const decoded = decode.exec('10122122150161110101111177');

        expect(typeof decoded).toBe('string');
        expect(decoded).toEqual('Monetizze');
    });

    it('#exec for "79501862390111166"', () => {
        const decoded = decode.exec('79501862390111166');

        expect(typeof decoded).toBe('string');
        expect(decoded).toEqual('Bom Dia');
    });
});
