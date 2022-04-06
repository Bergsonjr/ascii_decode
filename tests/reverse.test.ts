import reverse from '../src/helpers/reverse';

describe('Revers', () => {
    it('77111110101116105122122101 => 10122122150161110101111177', () => {
        const inverted = reverse('77111110101116105122122101');

        expect(typeof inverted).toBe('string');
        expect(inverted).toEqual('10122122150161110101111177');
    });

    it('79501862390111166 => 66111109326810597', () => {
        const inverted = reverse('79501862390111166');

        expect(typeof inverted).toBe('string');
        expect(inverted).toEqual('66111109326810597');
    });
});
