export function romanToInteger(str) {
    let result = 0;
    const objRomanNumbers = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    const arrayNumber = [...str].map((item) => objRomanNumbers[item]);
    for (let i = 0; i < arrayNumber.length; i++) {
        if (arrayNumber[i] < arrayNumber[i + 1]) {
            result += arrayNumber[i + 1] - arrayNumber[i];
            i++;
        } else {
            result += arrayNumber[i];
        }
    }
    return result;
}
