const user = {name: 'Alex', age: 31};
const address = {city: 'Paris', zip: '75020'};

const account = {
  ...user,
  ...address
};

console.log(account);

const teacher = {name: 'Alex', age: 31};

const {name, age} = teacher;

console.log(name);
console.log(age);

function sayHello({name}){
  console.log(`Hello ${name}`);
}

sayHello(teacher);
