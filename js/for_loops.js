// function showMultiplicationTable(num) {
//     for (let i = 1; i < 11; i++) {
//         console.log(num * i);
//     }
// }

// for (let i = 0; i < 10; i++) {
//     let random = Math.floor((Math.random() * 181) + 20)
//     if (random % 2 === 0) {
//         console.log(random + " is even.");
//     } else {
//         console.log(random + " is odd.");
//     }
// }

// for (let i = 1; i < 10; i++) {
// console.log(i.toString().repeat(i));
// }

// for (let i = 100; i >= 5; i-=5) {
//         console.log(i);
// }

for (let i = 1; i < 50; i++) {
    let answer = parseFloat(prompt("Please enter a odd number between 1 and 50."));
    if (i === answer) {
        console.log("Yikes! Skipping number: " + answer);
    } else if (i % 2 !== 0) {
       continue console.log("Here is an odd number: " + answer);
    }
}