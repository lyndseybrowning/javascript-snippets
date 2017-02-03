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

Determines if two arrays are the same, for example:

```javascript
arrayMatch([1,1], [1,1]); // true
arrayMatch([1,0], [1,1]); // false
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

Sums all numeric values in an array using [Array.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) to filter out numeric values and [Array.reduce(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)]() to sum. Example:

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

# Custom Array methods

Made to further my understanding of existing array methods and callback functions.

## array-foreach 

custom version of [Array.forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach).


