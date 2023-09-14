const user = {
  name: 'Danil',
  age: 24,
  isAdmin: false
};

function greet(name) {
  return `Hello ${name}`;
}

const users = [
  { name: 'Max', age: 23, isAdmin: false },
  { name: 'Dima', age: 25, isAdmin: true },
  { name: 'Alexey', age: 20, isAdmin: false }
];


let simpleUsers = 0;
for (let i = 0; i < users.length; i++) {
  if (!users[i].isAdmin) {
    simpleUsers++;
  }
}

console.log(`Простые пользователи: ${simpleUsers}`);
