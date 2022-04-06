import reverse from '../helpers/reverse';

class Decode {
    exec(encoded: string) {
        const asciiRegex = new RegExp(/(6[0-9]|7[0-9]|8[0-9]|90)|(9[7-9]|1[0-1][0-9]|12[0-2])|(32)/gm);

        const splitedEncoded = reverse(encoded).split(asciiRegex);

        const filteredEncoded = splitedEncoded.filter((code) => code);

        const decoded = filteredEncoded.map((code) => String.fromCharCode(Number(code)));

        return decoded.join('');
    }
}

export default new Decode();
