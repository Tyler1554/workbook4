let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
    {product: "Skittles", price: 4.30},
    {product: "Cotton Candy", price: 5.60},
    {product: "Sour Patch Kids", price: 4.32},
    {product: "Airheads", price: 3.68},
    {product: "Gushers", price: 3.99},
    {product: "Ice Cream", price: 1.99},
]

function cheapCandy(products, price){
let candy= [];
for (const product of products) {
    if (product.price<=price) {
        candy.push(product.price);
        
    }
    return candy;
}

}
let priceOfCandy= cheapCandy(products, "4.00")
console.log(`Candy: ${priceOfCandy}`);

function mmFinder(products, product){
    let mm= [];
    for (const product of products) {
        if (product.product==product) {
            mm.push(products.product)
            
        }
        return mm
    }
    let findMM= mmFinder(products, "M&Ms")
    console.log(findMM);

}