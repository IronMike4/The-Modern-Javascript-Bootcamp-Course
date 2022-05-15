function callThreeTimes(f){
    f();
    f();
    f();
}

function cry(){
    console.log("BOO HOO I'M SO SAD!");
}

function rage(){
    console.log("I Hate Everything!");
}
callThreeTimes(cry);
callThreeTimes(rage);

function repeatNTimes(action, num){
for (let i = 0; i < num; i++)
    action();
}
// repeatNTimes(rage,13);


function pickOne (f1,f2){
    let rand = Math.random();
    console.log(rand);
    if(rand < 0.5){
        f1();
    }
    else{
        f2();
    }
    pickOne(cry, rage)
}
pickOne(cry, rage)