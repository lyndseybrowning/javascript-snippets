const map = (array, fn) => {
  const mapped = [];
  for (let i = 0, len = array.length; i < len; i++) {
    mapped.push(fn(array[i], i, array));
  }

  return mapped;
};

const array = [1, 2, 3, 4, 5];
const doubleAll = map(array, item => item * 2);

console.log(doubleAll); // [2, 4, 6, 8, 10]