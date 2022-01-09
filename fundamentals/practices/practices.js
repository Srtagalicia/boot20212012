// Iteration 1 - Get a random number between a range.

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

let randomNumber = getRandom(2,34);
console.log(randomNumber);

// Iteration 2 - Guess the Number. Generate a number between 0 and 100, enter a number and report if it is equal, greater or less. There are 10 attempts max to find the correct number.

// Iteration 3 - Create a function that returns an array with the arguments as items.

// Iteration 4 - Create a function that returns a certain number of prime numbers.



// Iteration 5 - Create a function to validate an ID.

function CheckId(id) { 
    let regex =  /^(\d{8})([A-Z])$/;
    if(id.value.match(regex)) { 
        alert('Correct')
        return true;
    }
    else { 
        alert('Wrong...! Try again')
        return false;
    }
}

// Iteration 6 - Define a function that determines a text string as a palindrome or not.

function palindrome(str) {
    let re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, '');
    let len = str.length;
    for (let i = 0; i < len/2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

palindrome("roma tibi subito motibus ibit amor");


