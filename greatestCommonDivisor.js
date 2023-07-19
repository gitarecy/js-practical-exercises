function greatestCommonDivider(number1, number2) {
    // looping until both numbers are equal
while(number1 != number2){
    if(number1 > number2) {
        number1 -= number2;
    }
    else {
        number2 -= number1;
    }
}

// display the gcd
console.log(`Greatest common dividor is ${number1}`);   
}

greatestCommonDivider(100, 51);

