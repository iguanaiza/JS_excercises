//For this challenge, assume there are 365 days in a year, 52 weeks in a year and 12 months in a year.

function lifeInWeeks(age) {

    age = prompt("How old are you?");
    
    let days = 90 * 365 - Math.round(age * 365);
    let weeks = 90 * 52 - Math.round(age * 52);
    let months = 90 * 12 - Math.round(age * 12);
    
    alert("You have " + days + " days, " + weeks + " weeks and " + months + " months left.");
}

lifeInWeeks(age);
