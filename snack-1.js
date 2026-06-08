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
    // for as keyword
    for (const bike of bikes) {
        // if for minor or same value of the weight
        if (bike.weightKg === 10) {
            console.log(bike.weightKg);
        }
    }
    // return a value
    return bikes;
};
// call the function
finalWeight();