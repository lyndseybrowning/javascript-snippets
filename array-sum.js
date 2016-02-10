// gets a sum of all digits in an array
// non-numerical values are ignored

// ES5
var arraySum = function(arr) {
  var numbers = function(n) {
    return typeof n === 'number';
  };

  var sum = function(a, b) {
    return a + b;
  };

  return arr.filter(numbers).reduce(sum, 0);
};

// ES6
const arraySum = (arr) => {
  const numbers = (n) => {
    return typeof n === 'number';
  };

  const sum = (a, b) => {
    return parseInt(a, 10) + parseInt(b, 10);
  };

  return arr.filter(numbers).reduce(sum, 0);
};

arraySum([1, 2, 3, 4, 'a']); // 10
arraySum([10, 10000, 20]); // 10030
