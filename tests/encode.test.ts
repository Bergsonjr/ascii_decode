import encode from '../src/controllers/encode';

describe('Encode', () => {
    it('#exec for "Monetizze"', () => {
        const encoded = encode.exec('Monetizze');

        expect(typeof encoded).toBe('string');
        expect(encoded).toEqual('10122122150161110101111177');
    });

    it('#exec for "Bom dia"', () => {
        const encoded = encode.exec('Bom Dia');

        expect(typeof encoded).toBe('string');
        expect(encoded).toEqual('79501862390111166');
    });
});
