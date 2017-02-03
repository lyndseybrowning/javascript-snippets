const reduce = (array, fn, accumulator) => {
  for (let i = 0, len = array.length; i < len; i++) {
    accumulator = fn(accumulator, array[i], array);
    fn(accumulator, array[i], array);
  }
  return accumulator;
};

const array = [1, 2, 3, 4, 5];
const sumReduce = reduce(array, (acc, cur) => acc + cur, 0);
const reduceToString = reduce(array, (acc, cur) => acc += cur, '');

console.log(sumReduce); // 15
console.log(reduceToString); // 12345