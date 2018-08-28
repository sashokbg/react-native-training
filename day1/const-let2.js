class Teacher{
  constructor(name){
    this.name = name;
  }

  sayHello = () => {
    console.log(`Hello ${this.name}`);
  }
}

let teacher = new Teacher('teacher 1');
let teacher2 = new Teacher('teacher 2');

console.log(teacher);
console.log(teacher2);

setTimeout(teacher.sayHello, 1000);
