const name = "AFOLAYAN TOLUWALOPE SEGUN";
let myCourses = ["HTML", " CSS", " JavaScript", " PHP", " C#", " Design"];

console.log("My NAME IS: " + name); 
console.log("MY COURSES ARE: " + myCourses);

const numbers = [];

if (myCourses.length % 2 === 0) {
  for (let i = 1; i <= 200; i++) {
    if(i % 2 === 0) {
      numbers.push(i);
    }
  }
}

else {
  for (let i = 1; i <= 200; i++) {
    if(i % 2 !== 0) {
      numbers.push(i);
    }
  }
}

console.log("MY NUMBERS ARE: " + numbers);
