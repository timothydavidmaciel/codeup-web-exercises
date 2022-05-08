"use strict";

(function () {
    let userP;

    while (true) {
        userP = parseFloat(prompt("Give me an odd number between 1 and 50, please."));
        if (userP % 2 !== 0 && userP >= 1 && userP <= 50) {
            break;
        }
    }

    for(let j = 1; j <= 50; j += 2) {
        if (j === userP) {
            console.log("Sorry, we don't talk about  " + userP);
            continue;
        }
        console.log(j);
    }
})();