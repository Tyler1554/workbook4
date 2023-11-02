let products = [
  { product: "Gummy Worms", price: 5.79 },
  { product: "Plain M&Ms", price: 2.89 },
  { product: "Peanut M&Ms", price: 2.89 },
  { product: "Swedish Fish", price: 3.79 },
  { product: "Skittles", price: 4.3 },
  { product: "Cotton Candy", price: 5.6 },
  { product: "Sour Patch Kids", price: 4.32 },
  { product: "Airheads", price: 3.68 },
  { product: "Gushers", price: 3.99 },
  { product: "Ice Cream", price: 1.99 },
];

function cheapCandy(products, price) {
  let candy = [];
  for (const product of products) {
    if (product.price < price) {
      candy.push(product.product);
    }
  }
  return candy;
}
let priceOfCandy = cheapCandy(products, "3.00");
console.log(`Candy: ${priceOfCandy}`);




function candyFinder(products, product) {
  let candy = [];
  for (const innerproduct of products) {
    if (innerproduct.product.includes(product)) {
      candy.push(innerproduct.product);
    }
  }
  return candy;
}
let findMm = candyFinder(products, "M&Ms");
console.log(`M&M Flavors: ${findMm}`);





function inStockItems(products, product){
    for (const innerproduct of products) {
        if (innerproduct.product==product) {
            return "Yes";
            
        }
        
    }
}
let stockedItems= inStockItems(products, "Swedish Fish")
console.log(`Is Swedish Fish in Stock? ${stockedItems}`);