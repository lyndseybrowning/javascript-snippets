const find = (array, fn) => {
  for (let i = 0, len = array.length; i < len; i++) {
    if (fn(array[i], i, array)) {
      return array[i];
    }
  }
};

const array = [1, 2, 3, 4, 5];
const findGreaterThan3 = find(array, item => item > 3);

console.log(findGreaterThan3); // [4, 5]