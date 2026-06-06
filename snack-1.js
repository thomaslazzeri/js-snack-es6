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
        weightKg: 20,
    },
];
// arrow function
const finalWeight = () => {
    // variable accumulation
    let total = 0;
    // for as keyword
    for (const bike of bikes) {
        // if for minor or same value of the weight
        if (bike.weightKg <= 10)
            // add in total the value of the weight
            total += bike.weightKg;
    }
    // return a value
    return total;
};
// call the function
console.log(finalWeight());