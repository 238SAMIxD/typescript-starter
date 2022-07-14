/* eslint-disable prettier/prettier */
// https://www.mindluster.com/certificate/242

const character = 'SAMI';
console.log(character);

let x: number;
x = 20;
x = 30;
console.log(x);

const circle = (diameter: number) => {
    return diameter*Math.PI;
}
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

let str: string;
str = 'haha';
str = 'hehe';
console.log(str);

const lol: (string|number)[] = [];
lol.push(2, 'xd');
console.log(lol);

const omg: Object = {
    lol,
    str
};
console.log(omg);

const cool: {
    one: string,
    two: number,
    three: boolean
} = {
    one: 'hej',
    two: 2,
    three: true
};
console.log(cool);

let age: unknown = 20; // uknown instead of any
age = 'k';
console.log(age);

let f: Function = () => console.log('F');
f = function() {console.log('FFF')};
console.log(f);
f();

const minus: Function = (a: number, b: number): number => {
    return a - b;
}
console.log(minus(10, 2));

const greet: Function = (user: {name: string, age: number}) => {
    console.log(`Hey ${user.name}! You are ${user.age} years old`);
}
greet({name: 'Samuel', age: 21});
type user = {name: string, age: number};
const greet2: Function = (user: user) => {
    console.log(user);
};
greet2({name: 'Simon', age: 15});

let plus: (a: number, b: number) => number;
plus = (a, b) => a + b;
plus = (b, a) => b + a;
console.log(plus(1, 2));
let logDetails: (obj: object) => void;
logDetails = (obj) => console.log(obj);
logDetails = (obj) => {
    for(const e in obj) {
        // console.log(obj[e]);
        if(typeof(e) !== 'object') {
            // console.log(obj[e]); ???
            continue;
        }
        logDetails(obj[e]);
    }
}
logDetails({user: 'xd', x: 2, d: true, p: '[e['});
