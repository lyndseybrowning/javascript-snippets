const permute = (source, prefix = '', words = []) => {     
  if(typeof source !== 'string') {
    throw('Expected string source');
  }
  
  source = source.toLowerCase();
  
  const word = prefix + source;
  const letters = source.split('');

  if(!words.includes(word)) {
    words.push(word);
  }

  letters.forEach((letter, index) => {
    const remainder = source.substring(0, index) + source.substring(index + 1);
    permute(remainder, prefix + letter, words);   
  });

  return words;
};

const permutations = permute('ABC');
console.log(permutations); // ["abc", "acb", "bac", "bca", "cab", "cba"]