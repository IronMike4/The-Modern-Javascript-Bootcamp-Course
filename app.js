function rollDie(){
    let roll = Math.floor(Math.random() * 6) + 1;
    console.log(`Rolled: ${roll}`);
}
rollDie();

function throwDice(numRolls){
    for(let i = 0; i < numRolls; i++)
    rollDie()    
}

function greet(nickname){
    console.log(`Hi, ${nickname}!`);
}

greet('Mike');