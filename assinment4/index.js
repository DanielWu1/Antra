
const arrr = [1, 2, 3, 4]
for(let i in arrr){
  if(i > 2){
    break;
  }
}

// test
const a = [1, 2, 4, 4];

console.log(a.makeReduce((accu, curr) => accu + curr, 0));

const str = 'abc';
const strarr = [...str];
// console.log(strarr);
console.log([...str].reduce((acc, cur) => acc + cur + cur)); // 'aabbcc';

const array = [1, 2, 3];
console.log(
  array.reduce((acc, cur) => {
    return acc + cur; //1, 3, 6
  }, 0)
);

function foo(arr) {
  return arr.reduce((obj, ele) => {
    return {
      ...obj,
      [ele.name]: ele.age,
    };
  }, {});
}

const arr = [
  { name: 'RR', age: 34 },
  { name: 'TT', age: 23 },
  { name: 'YY', age: 12 },
  { name: 'DD', age: 12 },
];

console.log(foo(arr));
/* {
  RR: 34,
  TT: 23, 
  YY: 12
} */

const numbers = [175, 50, 25];

const res = numbers.reduce((acc, cur) => {
  console.log('^ ^');
  return acc - cur;
}, 0);
console.log(res);

const obj = {
  name: 'TT',
  age: 56,
};
