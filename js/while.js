(() => {


// let i = 2;
// while (i < 65537) {
//     console.log(i);
//     i+=i;
// }

    let inventory = Math.floor(Math.random() * 51) + 50;
    let allSold = 0;

    do {
        let customersBuyCones = Math.floor(Math.random() * 5) + 1;
        console.log("Customer has ordered " + customersBuyCones + " ice cream cones. We have " + inventory + " left in stock");
        if (customersBuyCones < inventory) {
            console.log("I can not go home yet");
        }
        console.log("Some one just came in and bought all my ice creams. We have " + allSold + " ice cream cones left in stock.");
    } while (inventory === allSold);
    console.log("I just sold all the Ice Cream! I can finally go home!");

})();

