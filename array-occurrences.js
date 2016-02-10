// counts occurrences of an element in an array

// ES5
var getCount = function getCount(arr, el) {
  return arr.filter(function (cur) {
    return cur === el;
  }).length;
};

// ES6
const getCount = (arr, el) => {
  return arr.filter( (cur) => cur === el).length;
};

// test
getCount([1, 1, 2, 3], 1); // 2
getCount([2, 2, 'a', 'b', 'c'], 'a'); // 1
