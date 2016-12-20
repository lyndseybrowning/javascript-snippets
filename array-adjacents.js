// find adjacent entries in a 2D Matrix
// @param array[number, number] position: position to find adjacents from e.g. [0,0]
// @size number array size e.g. 3
// @filter array[number, number] (optional) positions to filter out of results
const findAdjacents = (position, size, filter = []) => {
  	const directions = [ [-1,-1], [-1,0], [-1,1], [0,-1], [0,1], [1,-1], [1,0], [1,1] ];
    const allDirections = directions.slice(0);
    const [row,col] = position;  
    
    const arrayMatch = (filter, result) => {
      return filter.some((item) => {  
        return item.every((x, index) => {
          return x === result[index];
        });  	
      });
    };

    return allDirections.reduce((acc, direction) => {
      const [x, y] = direction;
      const rowSum = (x < 0) ? row - Math.abs(x) : row + x;
      const colSum = (y < 0) ? col - Math.abs(y) : col + y;

      if((rowSum >= 0 && colSum >= 0) && (rowSum < size && colSum < size)) {    
        let result = [rowSum, colSum];    

        if(!arrayMatch(filter, result)) {
          acc.push(result);
        }
      }     
      return acc;
    }, []);     
};

// example:
// var matrix = [
//   ['a', 'b', 'c'],
//   ['d', 'e', 'f'],
//   ['g', 'h', 'i']
// ];
// find adjacent positions to 'a' [0,0]
console.log(findAdjacents([0,0], 3)); // [ [0,1], [1,0], [1,1]]
