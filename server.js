let nextYear = new Date().getFullYear() + 1;
let newYear = new Date(nextYear, 0, 1);

let dif = Math.ceil(newYear - new Date() / (1000 * 60 * 60 * 24));

console.log(dif);