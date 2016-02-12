// reject items in an array

const arrayReject = function(arr, callback) {
    let output = [];
    for(let i = 0; i<arr.length; i++) {
        if(!callback(arr[i], i)) {
            output.push(arr[i]);
        };
    }
    return output;
};

const getDogs = function(item) {
    return item.species === 'Dog';   
};

let items = [
    { name: "Julie", species: "Dog" },
    { name: "Jake", species: "Dog" },
    { name: "Jasper", species: "Cat" },
    { name: "Judie", species: "Dog" },
    { name: "Bob", species: "Fish" },
    { name: "Lyndsey", species: "Human" },
    { name: "Jessica", species: "Human" }    
];

const noDogs = arrayReject(items, getDogs); // show everything other than dogs
const onlyDogs = items.filter(getDogs); // example of native .filter()

console.table(noDogs);  
console.table(onlyDogs);
