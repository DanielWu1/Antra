Array.prototype.myReduce = function(fn, initialValue){
  let init = initialValue === undefined ? this[0] : initialValue;
  let start = initialValue === undefined ? 1 : 0;
  for(let i = start; i < this.length; i++){
    init = fn(init, this[i]);
    // console.log(init)
  }
  return init
}

// Array.prototype.myReduce = function(...args){
//   let[acc, index] = args.length === 1 ? [this[0], 1] : [args[1], 0];
//   for(let i = index; i < this.length; i++){
//     acc = args[0](acc, this[i], i, this);
//   }
//   return acc;
// };


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

// const obj = {
//   name: 'TT',
//   age: 56,
// };

// const obj = {"name": "daniel", "age": 16};
// const obj2 = {...obj};
// obj["age"] = 19;
// console.log(obj2)

// let testArr = [34, 21, 153, 99]
// let testCopy = [...testArr]

// Array.prototype.myForEach = function(fn) {
//   for (let i = 0; i < this.length; i++) {
//     fn(this[i], i, this);
//   }
// }

// testCopy.myForEach(function(cur, i, curarray) {
//   curarray[i] = cur + 100;
// })
// console.log(testCopy)

// Array.prototype.myMap = function(fn){
//     let res = [];
//     for (let i = 0; i < this.length; i++){
//         res.push(fn(this[i]))
//     }
//     return res
// }
// console.log(testCopy.myMap(function(cur, i, curarray) {
//     return cur + 300
// }));

// Array.prototype.myFilter = function(fn){
//     let res = [];
//     for(let i = 0; i < this.length; i++){
//         if(fn(this[i], i, this)){
//             res.push(this[i]);
//         }
//     }
//     return res;
// }

// console.log(testCopy.myFilter(function (cur, i, curarray) {
//   // curarray[i] = cur + 100;
//   return cur > 100;
// }));