// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
//isPhoneNumber
test('Test function isPhoneNumber true1', () =>{
    expect(functions.isPhoneNumber("123-456-7890")).toBe(true);
});

test('Test function isPhoneNumber true2', () =>{
    expect(functions.isPhoneNumber("456-7890")).toBe(true);
});

test('Test function isPhoneNumber false1', () =>{
    expect(functions.isPhoneNumber("56-7890")).toBe(false);
});

test('Test function isPhoneNumber false2', () =>{
    expect(functions.isPhoneNumber("abcdef")).toBe(false);
});

//isEmail
test('Test function isEmail true1', () =>{
    expect(functions.isEmail("jtdoan@ucsd.edu")).toBe(true);
});

test('Test function isEmail true2', () =>{
    expect(functions.isEmail("abcdef123@acdef.com")).toBe(true);
});

test('Test function isEmail false1', () =>{
    expect(functions.isEmail("56-7890")).toBe(false);
});

test('Test function isEmail false2', () =>{
    expect(functions.isEmail("abcdef123@acdef123.acdef123")).toBe(false);
});

//isStrongPassword
test('Test function isStrongPassword true1', () =>{
    expect(functions.isStrongPassword("hello123_")).toBe(true);
});

test('Test function isStrongPassword true2', () =>{
    expect(functions.isStrongPassword("password123_")).toBe(true);
});

test('Test function isStrongPassword false1', () =>{
    expect(functions.isStrongPassword("1234567890123456")).toBe(false);
});

test('Test function isStrongPassword false2', () =>{
    expect(functions.isStrongPassword("___!___")).toBe(false);
});

//isDate
test('Test function isDate true1', () =>{
    expect(functions.isDate("1/2/1234")).toBe(true);
});

test('Test function isDate true2', () =>{
    expect(functions.isDate("01/02/5678")).toBe(true);
});

test('Test function isDate false1', () =>{
    expect(functions.isDate("123/123/1234")).toBe(false);
});

test('Test function isDate false2', () =>{
    expect(functions.isDate("ab/cd/efgh")).toBe(false);
});

//isHexColor
test('Test function isHexColor true1', () =>{
    expect(functions.isHexColor("abc")).toBe(true);
});

test('Test function isHexColor true2', () =>{
    expect(functions.isHexColor("123")).toBe(true);
});

test('Test function isHexColor false1', () =>{
    expect(functions.isHexColor("1234567")).toBe(false);
});

test('Test function isHexColor false2', () =>{
    expect(functions.isHexColor("ab")).toBe(false);
});