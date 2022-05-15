// if(true) {
//     const animal = 'eel';
//     console.log(animal);
// }
// console.log(animal);


// if(true) {
//     var animal = 'eel';
//     console.log(animal);
// }
// console.log(animal);

// let animals = ['grizzly bear','panda bear','spectacled bear'];
// var i = 10;
// for (var i = 0; i < animals.length; i++){
//     console.log(i, animals[i])
// }
// console.log(i);

// let animals = ['grizzly bear','panda bear','spectacled bear'];
// let i = 10;
// for (let i = 0; i < animals.length; i++){
//     console.log(i, animals[i])
// }
// console.log(i);

function doubleArr(arr){
    const result = [];
    for (let num of arr){
        var double = num * 2;
        result.push(double);
    }
    console.log(double);
    return result;
}