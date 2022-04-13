console.log("Hello from external JavaScript");

alert("Welcome to my website");

let answer = prompt("What is your favorite color?");
alert("Great " + answer + " is my favorite color too!")

let littleM = prompt("How many days will you rent 'The Little Mermaid'");
alert(littleM + " days")

let brotherBear = prompt("How many days will you rent 'Brother Bear'");
alert(brotherBear + " days");

let hercules = prompt("How many days will you rent 'Hercules'");
alert(hercules + " days");

let movieRent = prompt("How much was the total price that you paid for renting the movies?");
alert("$" + movieRent);

let google = prompt("How much does Google pay you an hour?");
alert("$" + google);

let amazon = prompt("How much does Amazon pay you an hour?");
alert("$" + amazon);

let facebook = prompt("How much does Facebook pay you an hour?");
alert("$" + facebook);

let totalPay = prompt("How much did you make in a week from all three jobs?")
alert("$" + totalPay);


function yesOrNo() {
    let yes = "Student A can enroll";
    if(student) {
        return yes;
    } else {
        return alert("Student A is not able to enroll");
    }
}

let student = confirm("Can student A enroll in to a class that is 2 hours long?");
alert(yesOrNo(student));

function offer() {
    let yes2 = "The offer has been applied"
    if(checkout){
        return yes2
    } else {
        return alert("The offer was not applied")
    }
}
let checkout = confirm("The offer can only be applied if two or more has been bought and the offer has not expired. Is the purchase 2 or more and the offer current? 'Please not that this does not apply to premium members");
alert(offer(checkout));