//function that counts the number of zeros in one number

function zerosInNumber(number){
    var word = number.toString();
    let check = word.includes('0');
    let result=0;
    if(check===true){
      result = word.replace(/[^0]/g, "").length;
     //console.log(result);
    } else {
        console.log ('\nThe number you provided does not contain any zeros in it. Try something else :)\n');
    }
    return result;
 }
 
 //function that creates an array and sums up the number of zeros for all the numbers it contains 
 function rangeFromOne(n){
     let range=[];
     for (var i = 1; i <= n; i++) { 
         
         range.push(zerosInNumber(i));
     }
     //console.log(range);
 
     let sum = range.reduce((accumulator, value) => {
         return accumulator + value;
     }, 0);
 
     console.log(`The sum of zeros from 1 to ${n} is ${sum}`);
 }
 
 rangeFromOne(1);