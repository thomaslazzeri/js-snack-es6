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

const finalWeight = () => {
    let total = 0;
    for (const bike of bikes) {
        if (bike.weightKg <= 10)
            total += bike.weightKg;
    }
    return total;
};

console.log(finalWeight());