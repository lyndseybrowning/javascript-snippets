// checks if two arrays match
// e.g. [1,1] === [1,1], [1,0] !== [1,1]
function arrayMatch(first, second) {	
	return first.some((item) => {  
 		return item.every((x, index) => {
    	return x === second[index];
    });  	
  });
}
