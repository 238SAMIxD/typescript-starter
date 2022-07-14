"use strict";
/* eslint-disable prettier/prettier */
// https://www.mindluster.com/certificate/242
const character = 'SAMI';
console.log(character);
let x;
x = 20;
x = 30;
console.log(x);
const circle = (diameter) => {
    return diameter * Math.PI;
};
console.log(circle(2));
const names = ['Sami', 'XD'];
names.push('');
console.log(names);
const mixed = ['Kappa', 238, true];
console.log(mixed);
const Sami = {
    mixed,
    age: 21,
    names,
    getAge() {
        return this.age;
    }
};
console.log(Sami);
let str;
str = 'haha';
str = 'hehe';
console.log(str);
const lol = [];
lol.push(2, 'xd');
console.log(lol);
const omg = {
    lol,
    str
};
console.log(omg);
const cool = {
    one: 'hej',
    two: 2,
    three: true
};
console.log(cool);
let age = 20; // uknown instead of any
age = 'k';
console.log(age);
let f = () => console.log('F');
f = function () { console.log('FFF'); };
console.log(f);
f();
const minus = (a, b) => {
    return a - b;
};
console.log(minus(10, 2));
const greet = (user) => {
    console.log(`Hey ${user.name}! You are ${user.age} years old`);
};
greet({ name: 'Samuel', age: 21 });
const greet2 = (user) => {
    console.log(user);
};
greet2({ name: 'Simon', age: 15 });
let plus;
plus = (a, b) => a + b;
plus = (b, a) => b + a;
console.log(plus(1, 2));
let logDetails;
logDetails = (obj) => console.log(obj);
logDetails = (obj) => {
    for (const e in obj) {
        // console.log(obj[e]);
        if (typeof (e) !== 'object') {
            // console.log(obj[e]); ???
            continue;
        }
        logDetails(obj[e]);
    }
};
logDetails({ user: 'xd', x: 2, d: true, p: '[e[' });
//# sourceMappingURL=index.js.map