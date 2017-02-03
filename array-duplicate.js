const duplicateReduce = (array) => {
  return array.reduce((acc, current) => {
    acc.push.apply(acc, [current, current]);

    return acc;
  }, []);
};

const duplicateConcat = (array) => {
  return array.concat(array).sort();
};

const duplicateSpread = (array) => {
  const duplicate = [...array, ...array];

  return duplicate.sort();
};

const duplicateLoop = (array) => {
  const duplicate = [];
  array.forEach(item => {
    duplicate.push(item);
    duplicate.push(item);
  });

  return duplicate;
};

const array = [1, 2, 3];
const reducer = duplicateReduce(array);
const concat = duplicateConcat(array);
const other = duplicateSpread(array);
const loop = duplicateLoop(array);

// all of the below produce [1, 1, 2, 2, 3, 3]
console.log(reducer);
console.log(concat);
console.log(other);
console.log(loop);