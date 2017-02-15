function clone(obj) {
  const cloned = Object.keys(obj).reduce((acc, prop) => {
  	acc[prop] = obj[prop];

    if(typeof obj[prop] === 'object' && !Array.isArray(obj[prop])) {
      acc[prop] = clone(obj[prop]);
    }

    return acc;
  }, {});

  return cloned;
};

const source = {
	name: 'Lyndsey',
  age: 30,
  likes: ['javascript', 'css'],
  other: {
  	color: 'orange'
  }
};

const cloned = clone(source);
cloned.other.color = 'red';

console.log(source.other.color); // orange
console.log(cloned.other.color); // red
