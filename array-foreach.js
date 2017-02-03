const forEach = (array, fn) => {
  for (let i = 0, len = array.length; i < len; i++) {
    fn(array[i], i, array);
  }
};

forEach([1, 2, 3, 4, 5], (item) => {
  console.log(item); // 1, 2, 3, 4, 5
});