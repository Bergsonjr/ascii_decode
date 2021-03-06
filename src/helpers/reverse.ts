const regexSymbolWithCombiningMarks =
    /([\0-\u02FF\u0370-\u1AAF\u1B00-\u1DBF\u1E00-\u20CF\u2100-\uD7FF\uE000-\uFE1F\uFE30-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])([\u0300-\u036F\u1AB0-\u1AFF\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]+)/g;
const regexSurrogatePair = /([\uD800-\uDBFF])([\uDC00-\uDFFF])/g;

export default function reverse(str: string) {
    let result = '';

    str = str
        .replace(regexSymbolWithCombiningMarks, function ($0, $1, $2) {
            return reverse($2) + $1;
        })
        .replace(regexSurrogatePair, '$2$1');

    let index = str.length;

    while (index--) result += str.charAt(index);

    return result;
}
