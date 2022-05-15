// function multiplyBy(num){
//     return function(x){
//     return x * num;   
//     }
// }

// const triple = multiplyBy(3);
// const double = multiplyBy(2);
// const halve = multiplyBy(0.5);

function makeBetweenFunc(x,y){
    return function(num){
        return num >= x && num <= y
    }
}

// makeBetweenFunc(0,18);

    // const isChild = function(num){
    //     return num >= 0 && num <= 18;
    // }

    // isChild(17) // true
    // isChild(80) // false

const isChild = makeBetweenFunc(0,18);
const isNineties = makeBetweenFunc(1990,2000);