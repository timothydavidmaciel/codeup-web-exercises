console.log("Hello from external JavaScript");

alert("Welcome to my website");

let answer = prompt("What is your favorite color?");
alert("Great " + answer + " is my favorite color too!")

let littleM = parseFloat(prompt("How many days will you rent 'The Little Mermaid'"));

let brotherBear = parseFloat(prompt("How many days will you rent 'Brother Bear'"));

let hercules = parseFloat(prompt("How many days will you rent 'Hercules'"));

alert("One moment while we calculate your total.")

let movieRent = littleM + brotherBear + hercules * 3;
alert("Your total is " + "$" + movieRent);

let google = parseFloat(prompt("How much does Google pay you an hour?"));

let totalHours = parseFloat(prompt("How many hours did your work?"));

let amazon = parseFloat(prompt("How much does Amazon pay you an hour?"));

let totalHours2 = parseFloat(prompt("How many hours did your work?"));

let facebook = parseFloat(prompt("How much does Facebook pay you an hour?"));

let totalHours3 = parseFloat(prompt("How many hours did your work?"));
alert("One moment while we calculate your total.")

let allHours = (google * totalHours) + (amazon * totalHours2) + (facebook *totalHours3);

totalPay = allHours;

alert("Your total pay is " + "$" + totalPay);

let student = confirm("Can student A enroll in to a class that is 2 hours long?");

function yesOrNo() {
    let yes = "Student A can enroll";
    if(student) {
        return yes;
    } else {
        return "Student A is not able to enroll";
    }
}

alert(yesOrNo(student));

let checkout = confirm("The offer can only be applied if two or more has been bought and the offer has not expired. Is the purchase 2 or more and the offer current? 'Please not that this does not apply to premium members");

function offer() {
    let yes2 = "The offer has been applied";
    if(checkout){
        return yes2;
    } else {
        return "The offer was not applied";
    }
}

alert(offer(checkout));
