// 
//простые типы данных
console.log(4 / 0) // infinity
console.log(-4 / 0) // -infinity
console.log('string' * 9) //NaN
let und;
console.log(und) //undefined


// Обьекты
let obj = {
    name: 'John',
    age: 25,
    isMarried: false
};

console.log(obj.name); //правильно
console.log(obj['name']);// правильно