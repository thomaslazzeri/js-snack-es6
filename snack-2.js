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

const finalResult = (arraySquad) => {
    for (const squad of arraySquad) {
        const randomPoints = Math.floor(Math.random() * 100);
        const randomFouls = Math.floor(Math.random() * 100);
        squad.pointsScored = randomPoints;
        squad.FoulsDrawn = randomFouls;
    }
    const newArray = arraySquad.map(squad => {
        return {
            name: squad.name,
            FoulsDrawn: squad.FoulsDrawn
        };
    });
    return newArray;
};
console.log(finalResult(squads));