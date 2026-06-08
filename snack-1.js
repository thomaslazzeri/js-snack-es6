// variable for the objects
const bikes = [
    {
        name: 'Bianchi',
        weightKg: 10,
    },
    {
        name: 'Moser',
        weightKg: 15,
    },
    {
        name: 'Colnago',
        weightKg: 7,
    },
     {
        name: 'ferrari',
        weightKg: 25,
    },
     {
        name: 'eros',
        weightKg: 8,
    },
     {
        name: 'pippo',
        weightKg: 22,
    },
    
];
// arrow function
const finalWeight = () => {
    // create a variable by assigning it the first element of the array
    let leggera = bikes[0]; // it can also be done like this => bikes[bikes.length];
    // for as keyword
    for (const bike of bikes) {
        // check which is the lightest bike with an if
        if (bike.weightKg < leggera.weightKg) {
            leggera = bike;
        }
    }
    // return a value
    return leggera;
};
// call the function
console.log(finalWeight());