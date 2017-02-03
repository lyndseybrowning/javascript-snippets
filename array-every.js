const every = (array, fn) => {
  for (let i = 0, len = array.length; i < len; i++) {
    if (!fn(array[i], i, array)) {
      return false;
    }
  }
  return true;
};

const array = [1, 2, 3, 4, 5];
const singleDigits = every(array, item => item < 10);
const greaterThan10 = every(array, item => item > 10);

console.log(singleDigits); // true
console.log(greaterThan10); // false