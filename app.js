let password = 'kitty';

if (password.length >= 6){
    if (password.indexOf(' ') === -1){
        console.log('Valid Password!');
    }
    else {
        console.log('Password is long enough but can not contain spaces');
    }
}
else {
    console.log('Password must be longer!');
}
