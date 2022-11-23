const passwordLength = require('./password');
const passwordIsNotNull = require('./password');
const hasUpperCase = require('./password');
const hasLowerCase = require('./password');
const hasDigit = require('./password');

describe('Checking passwords', () => {
    test("Get password length, too long", () => {
        const password = "Hljb4hwhjrbhj"
        expect(passwordLength(password)).toBeFalsy;
    }); 

    test("Get password length, correct", () => {
        const password = "Tljb4"
        expect(passwordLength(password)).toBeTruthy;
    }); 
        
    test("Shouldn't be null, with letters", () => {
        const password = "Vmgjmv";
        expect(passwordIsNotNull(password)).toBeTruthy();
    }) 

    test("Shouldn't be null, null", () => {
        const password = null;
        expect(passwordIsNotNull(password)).toBeFalsy();
    })

    test("Should contain uppercase, with uppercase", () => {
        const password = "43rhj4G"
        expect(hasUpperCase(password)).toBeTruthy();
    })

    test("Should contain uppercase, without uppercase", () => {
        const password = "123d"
        expect(hasUpperCase(password)).toBeFalsy();
    })

    test("Should contain lowercase, with lowercase", () => {
        const password = "gtkk8B"
        expect(hasLowerCase(password)).toBeTruthy();
    })

    test("Should contain digit, with digit", () => {
        const password = "gtkk8B"
        expect(hasDigit(password)).toBeTruthy();
    })

    test("Should contain digit, no digit", () => {
        const password = "gtkk"
        expect(hasDigit(password)).toBeFalsy();
    })
})

