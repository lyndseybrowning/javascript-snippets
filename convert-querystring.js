const convertQueryString = (querystring) => {
  const array = querystring.split('&');
  
  return array.reduce((acc, cur) => {
    const [key, val] = cur.split('=');  
    const isExistingKey = acc[key];
    
    if(isExistingKey) {
      const existingValue = acc[key];
      
      if(Array.isArray(existingValue)) {
        existingValue.push(val);
      } else {
        acc[key] = [acc[key], val];
      }
    } else {
      acc[key] = val;    
    }   
     
    return acc;
  }, {});
};

const convert = convertQueryString('first_name=lyndsey&last_name=browning&likes=javascript&likes=react&likes=sass');

console.log(convert); // { first_name: 'Lyndsey', last_name: 'Browning', likes: ['javascript', 'react', 'sass'] }