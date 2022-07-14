/* eslint-disable prettier/prettier */
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
