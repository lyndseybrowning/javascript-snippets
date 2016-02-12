// reject items in an array

let items = [
    { name: "Julie", species: "Dog" },
    { name: "Jake", species: "Dog" },
    { name: "Jasper", species: "Cat" },
    { name: "Judie", species: "Dog" },
    { name: "Bob", species: "Fish" },
    { name: "Lyndsey", species: "Human" },
    { name: "Jessica", species: "Human" }    
];

items.reject = function(callback) {
    let output = [];
    for(let i = 0; i<this.length; i++) {
        if(!callback(this[i], i)) {
            output.push(this[i]);
        };
    }
    return output;
}

const getDogs = function(item) {
    return item.species === 'Dog';   
};

let noDogs = items.reject(getDogs);
let onlyDogs = items.filter(getDogs);

console.table(noDogs);  
console.table(onlyDogs);
