/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let i = 0;
    let num = 0;

    while (i < s.length) {
        if (s[i] === 'I' && s[i+1] === 'V') {
            num += 4;
            i += 2;
        } else if (s[i] === 'I' && s[i+1] === 'X') {
            num += 9;
            i += 2;
        } else if (s[i] === 'X' && s[i+1] === 'L') {
            num += 40;
            i += 2;
        } else if (s[i] === 'X' && s[i+1] === 'C') {
            num += 90;
            i += 2;
        } else if (s[i] === 'C' && s[i+1] === 'D') {
            num += 400;
            i += 2;
        } else if (s[i] === 'C' && s[i+1] === 'M') {
            num += 900;
            i += 2;
        } else if (s[i] === 'I') {
            num += 1;
            i++;
        } else if (s[i] === 'V') {
            num += 5;
            i++;
        } else if (s[i] === 'X') {
            num += 10;
            i++;
        } else if (s[i] === 'L') {
            num += 50;
            i++;
        } else if (s[i] === 'C') {
            num += 100;
            i++;
        } else if (s[i] === 'D') {
            num += 500;
            i++;
        } else if (s[i] === 'M') {
            num += 1000;
            i++;
        }
    }

    return num;
};