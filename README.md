<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [JavaScript Snippets](#javascript-snippets)
  - [array-adjacents](#array-adjacents)
  - [array-match](#array-match)
  - [array-occurrences](#array-occurrences)
  - [array-reject](#array-reject)
  - [array-sum](#array-sum)
  - [british-date](#british-date)
  - [modulus](#modulus)
  - [array-duplicate](#array-duplicate)
  - [convert-querystring](#convert-querystring)
  - [string-permutations](#string-permutations)
  - [object-deep-clone](#object-deep-clone)
- [Custom Array methods](#custom-array-methods)
  - [array-foreach](#array-foreach)
  - [array-filter](#array-filter)
  - [array-find](#array-find)
  - [array-findIndex](#array-findindex)
  - [array-every](#array-every)
  - [array-reduce](#array-reduce)
  - [array-map](#array-map)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# JavaScript Snippets

Short JavaScript snippets.

Created for educational purposes.

## array-adjacents

Find adjacent elements in a 2D Matrix, for example:

```javascript
[
	['A', 'B', 'C'],
	['D', 'E', 'F'],
	['G', 'H', 'I']
]

findAjacents([0, 0]); // [ [0,1], [1,0], [1, 1] ]
```

## array-match

Determines if two arrays are exactly the same, for example:

```javascript
arrayMatch([1,1], [1,1]); // true
arrayMatch([1,0], [1,1]); // false
arrayMatch([1, '0'], [1, 0]); // false
```

## array-occurrences

Counts the number of occurrences (strict equal comparison) of an element in an array, for example:

```javascript
const array = [1, 1, 2, 3, 4, 5];

getCount(array, 1); // 2
getCount(array, 5); // 1
getCount(array, 'a'); // 0
```

## array-reject

Opposite of [Array.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter). Removes the requested items from an existing array. Example:

```javascript
const array = [1, 1, 2, 3, 4, 5];

arrayReject(array, (item) => item > 2); // [1, 1, 2];
arrayReject(array, (item) => typeof item === 'number')); // [];
arrayReject(array, (item) => item === 1); // [2, 3, 4, 5];
```

## array-sum

Sums all numeric values in an array using [Array.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) to filter out numeric values and [Array.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) to sum. Example:

```javascript
arraySum([1, 2, 3, 4, 'a']); // 10
arraySum([10, 10000, 20]); // 10030
```

## british-date

Formats a given date to british formats, for example:

```javascript
formatDate(new Date()); // 12/02/2016
formatDate('2014-10-12 09:00 AM'); // 12/10/2014
formatDate(new Date(), '-'); // 12-02-2016
```

## modulus

Calculate modulus with modulus operator and without:

```javascript
getModulus(20, 3); // 2
```

## array-duplicate

Multiple methods for duplicating values of an array using different techniques such as:

- [Array.reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
- [Array.concat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)
- [ES6 spread operator](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Spread_operator)
- [Array.forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

Example using ES6 spread:

```javascript
const duplicateSpread = (array) => {
  const duplicate = [...array, ...array];

  return duplicate.sort();
};

const array = [1, 2, 3];
console.log(duplicateSpread(array)); // [1, 1, 2, 2, 3, 3]
```

## convert-querystring

Takes a querystring and converts it to an object e.g.

```javascript
const convert = convertQueryString('first_name=lyndsey&last_name=browning&likes=javascript&likes=react&likes=sass');

/*
{
  first_name: 'Lyndsey',
  last_name: 'Browning',
  likes: [
    'javascript',
	'react',
	'sass'
  ]
}
*/
```

## string-permutations

Find all permutations of a given string, e.g.

```javascript
const permutations = permute('abc');

console.log(permutations); // ["abc", "acb", "bac", "bca", "cab", "cba"]
```

## object-deep-clone

Deep clone an object preventing the original input being mutated.

```javascript
const source = {
  name: 'Lyndsey',
  age: 30,
  likes: ['javascript', 'css'],
  other: {
  	color: 'orange'
  }
};
```

Example standard shallow-clone using ```Object.assign```:

```javascript
const shallow = Object.assign({}, source);
shallow.other.color = 'red';

console.log(source.other.color); // red. obj is mutated!
```

Example using deep clone method:

```javascript
const cloned = clone(source);
cloned.other.color = 'red';

console.log(source.other.color);  // orange
console.log(cloned.other.color); // red
```

# Custom Array methods

Made to further my understanding of existing array methods and callback functions.

## array-foreach

Custom version of [Array.forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach).

This method takes an existing array and performs a callback function on each item in turn.

```javascript
forEach([1, 2, 3, 4, 5], (item) => {
  console.log(item); // 1, 2, 3, 4, 5
});
```

## array-filter

Custom version of [Array.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter).

This method takes an existing array and returns a new array with the items that comply with the callback function.

Example:

```javascript
const array = [1, 2, 3, 4, 5];
const divisibleByTwo = filter(array, (item, index) => {
	return item % 2 === 0;
});

console.log(divisibleByTwo); // [2, 4]
```

## array-find

Custom version of [Array.find](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find).

This method finds the first instance of an item that passes the callback function (truthy).

Example:

```javascript
const array = [1, 2, 3, 4, 5];
const findGreaterThan3 = find(array, item => item > 3);

console.log(findGreaterThan3); // 4
```

## array-findIndex

Custom version of [Array.findIndex](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex).

This method is the same as ```Array.find``` but the index of the first instance of an item is found, instead of the item itself.

Example:

```javascript
const array = [1, 2, 3, 4, 5];
const findGreaterThan3Index = findIndex(array, item => item > 3);

console.log(findGreaterThan3Index); // 3
```

## array-every

Custom version of [Array.every](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every).

Returns truthy if **every** item in the array passed the callback function.

Example:

```javascript
const array = [1, 2, 3, 4, 5];
const singleDigits = every(array, item => item < 10);
const greaterThan10 = every(array, item => item > 10);

console.log(singleDigits); // true
console.log(greaterThan10); // false
```

## array-reduce

Custom version of [Array.reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce).

The reduce method takes an existing array, a callback function to be acted upon each element and an initial value. The existing array is reduced down to a single value; its type is determined by the initial value.

The result of the previous iteration is passed to the next iteration and thus an accumulator is created.

Example:

```javascript
const array = [1, 2, 3, 4, 5];
const sumReduce = reduce(array, (acc, cur) => acc + cur, 0);
const reduceToString = reduce(array, (acc, cur) => acc += cur, '');

console.log(sumReduce); // 15
console.log(reduceToString); // 12345
```

## array-map

Custom version of [Array.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map).

This method takes an array and performs a callback function on each element in the array that transforms it, producing a new array of mapped values.

Example:

```javascript
const array = [1, 2, 3, 4, 5];
const doubleAll = map(array, item => item * 2);

console.log(doubleAll); // [2, 4, 6, 8, 10]
```
