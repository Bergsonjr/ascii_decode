import reverse from '../helpers/reverse';

class Encode {
    exec(str: string) {
        const chars = str.split('');

        const encoded = chars.map((char) => char.charCodeAt(0));

        return reverse(encoded.join(''));
    }
}

export default new Encode();
