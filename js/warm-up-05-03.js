================================= WARM UP

Create a function, returnProductEssentialDetails, that takes in a product object and returns a simpler product object containing only the product name and price in cents.

    Examples...

let product1 = {
    name: 'Hammar',
    priceInCents: 400,
    description: 'It is a a hammar.',
    inventory: 25034
}

let product2 = {
    name: 'Computer',
    priceInCents: 40000,
    description: 'It is a computer.',
    inventory: 33000
}

let product3 = {
    name: 'Ruler',
    priceInCents: 1000,
    description: 'It is a ruler.',
    inventory: 2200
}

function returnProductEssentialDetails(product) {
    return {
        name: product.name,
        priceInCents: product.priceInCents
    }
}

// returnProductEssentialDetails(product1); // returns...
//
//
//     {
//         name: 'Hammar',
//         priceInCents: 400
//     }


returnProductEssentialDetails(product2); // returns...

/*

    {
        name: 'Computer',
        priceInCents: 40000
    }

*/


returnProductEssentialDetails(product3); // returns...

/*

    {
        name: 'Ruler',
        priceInCents: 1000
    }

*/



BONUS (if time permits)

Create a function, returnAllProductsEssentialDetails, that takes in an array of product objects and returns an array of product objects containing only the essential details of the product name and price in cents.