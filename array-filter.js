const filter = (array, fn) => {
  const filtered = [];
  for (let i = 0, len = array.length; i < len; i++) {
    if (fn(array[i], i, array)) {
      filtered.push(array[i]);
    }
  }
  return filtered;
};

const array = [1, 2, 3, 4, 5];

const divisibleByTwo = filter(array, (item, index) => {
  return item % 2 === 0;
});

console.log(divisibleByTwo); // [2, 4]