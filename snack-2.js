// variable for the objects
const squads = [
    {
        name: 'Juventus',
        pointsScored: 0,
        FoulsDrawn: 0,
    },
    {
        name: 'Milan',
        pointsScored: 0,
        FoulsDrawn: 0,
    },
    {
        name: 'Inter',
        pointsScored: 0,
        FoulsDrawn: 0,
    },
];
// arrow function
const finalResult = (arraySquad) => {
    // for as keyword
    for (const squad of arraySquad) {
        // variables for create random number from 0 to 100
        const randomPoints = Math.floor(Math.random() * 100);
        const randomFouls = Math.floor(Math.random() * 100);
        // objects same to the variables for the random number
        squad.pointsScored = randomPoints;
        squad.FoulsDrawn = randomFouls;
    }
    // isolate and "filter" only the information that is really needed 
    // creating a new list to show the user without touching or damaging 
    // the original data.
    const newArray = arraySquad.map(squad => {
        return {
            name: squad.name,
            FoulsDrawn: squad.FoulsDrawn
        };
    });
    // return a value
    return newArray;
};
// call the function
console.log(finalResult(squads));