// declare variables
const digitStr ='0123456789';
const upperCaseStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCaseStr = 'abcdefghijklmnopqrstuvwxyz';


$(document).ready(function(){
    $("button").click(function(){
    getRandomChars()
    });
});
// prepare strings 
const checkRequirements = () => {
    let strBeforeRandom = '';
    if ($("#digits").is(":checked")) {
        strBeforeRandom += digitStr;
    }
    if ($("#uppercase").is(":checked")) {
        strBeforeRandom += upperCaseStr;
    }
    if ($("#lowercase").is(":checked")) {
        strBeforeRandom += lowerCaseStr;
    }
    return strBeforeRandom;
}

// select random characters 

const getRandomChars = () => {

    let randomStr = '';

    for ( let i = 0; i < $("#inputDigits").val(); i++ ) {
        randomStr += checkRequirements().charAt((Math.random() * checkRequirements().length-1));
    }
    // add the output to the result block
    $("#result").val(randomStr);
}



