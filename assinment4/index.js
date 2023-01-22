
Array.prototype.myReduce = function(fn, initialValue){
  let init = initialValue === undefined ? this[0] : initialValue;
  let start = initialValue === undefined ? 1 : 0;
  for(let i = start; i < this.length; i++){
    init = fn(init, this[i]);
    // console.log(init)
  }
  return init
}


// test
const a = [1, 2, 4, 4];

console.log(a.myReduce((accu, curr) => {return accu + curr}, 0));

const str = 'abc';
const strarr = [...str];
// console.log(strarr);
console.log([...str].myReduce((acc, cur) => {return acc + cur + cur}, '')); // 'aabbcc';

const array = [1, 2, 3];
console.log(
  array.myReduce((acc, cur) => {
    return acc + cur; //1, 3, 6
  }, 0)
);

function foo(arr) {
  return arr.myReduce((obj, ele) => {
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

const res = numbers.myReduce((acc, cur) => {
  console.log('^ ^');
  return acc - cur;
}, 0);
console.log(res);

const obj = {
  name: 'TT',
  age: 56,
};
