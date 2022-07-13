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
