let loggedInUser = 'Iwe';

// If there isn't a logged in user

if(!loggedInUser){
    console.log('Get out of here!');
}

let flavor = 'banana';
if(flavor !== 'grape' && flavor !== 'cherry') {
    console.log("We don't have that flavor!");
}

if(!(flavor === 'grape' || flavor === 'cherry')){
    console.log('Not one of the flavors');
}