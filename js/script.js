"use strict"

let number = 5;
const leftBorderWidth = 1;


let incr = 10,
    decr = 10;

console.log(incr++);
console.log(--decr);

console.log(4 * 3 ** 2);

let num = 50;
while (num <= 55) {
    console.log(num);
    num++;
};

let result = '';
const lenght = 7;
for (let i = 1; i < lenght; i++) {
    for (let j = 0; j < i; j++) {
        result += "*";
    }
    result += '\n';
}
console.log(result);


for (let i = 0; i , 3; i++) {
    console.log(`First level: $[i]`);
    for (let i = 0; i , 3; i++) {
        console.log(`Second level: $[i]`);
}

for (let i = 0; i < 10; i++) {
    if (i === 6) {
        // break;
        continue;
    }
    console.log(i);
}

let step;
for (step = 0; step < 5; step++) {
  // Запускается 5 раз, с шагом от 0 до 4.
  console.log('Идём 1 шаг на восток');
}

first: for (let i = 0; i < 3; i++) {
console.log(`First level: ${i}`);
for (let j = 0; j < 3; j++) {
    console.log(`Second level: ${j}`);
    for (let k = 0; k < 5; k++) {
        if (k === 2) continue first;
        console.log(`Third level: ${k}`);
        }
    }
}

for (let i = 5; i <= 10; i++) alert(i);

let i = 0;
while (++i < 5) alert( i );

function sayHello(name) {
    return `Привет, ${name}!`
}

function sayWelcome (userFirstName, userLastName) {
    console.log(`Добро пожаловать, ${userLastName} ${userFirstName}`);
  }
  // 'Иван' и 'Иванов' – аргументы
  sayWelcome('Иван', 'Иванов'); // Добро пожаловать, Иванов Иван
  // 'Петр' и 'Петров' – аргументы
  sayWelcome('Петр', 'Петров'); 

  switch (browser) {
    case 'Edge':
      alert( "You've got the Edge!" );
      break;
  
    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
      alert( 'Okay we support these browsers too' );
      break;
  
    default:
      alert( 'We hope that this page looks ok!' );
  }

  function showMessage() {
    alert( 'Всем привет!' );
  }

  function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Родители разрешили?');
    }
  }


  function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
  }

