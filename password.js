const passwordIsNotNull = str => str !== null;

const passwordLength = str => passwordIsNotNull(str) && str.length <= 8;

const hasUpperCase = str => passwordIsNotNull(str) && str.toLowerCase() !== str;

const hasLowerCase = str => passwordIsNotNull(str) && str.toUpperCase() !== str;

const hasDigit = str => str == 1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9 || 0;

module.exports = passwordLength;
module.exports = passwordIsNotNull;
module.exports = hasUpperCase;
module.exports = hasLowerCase;
module.exports = hasDigit;
//module.exports = verifyPassword;