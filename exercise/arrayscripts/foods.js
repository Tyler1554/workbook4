let lunch = [
    {item: "Steak Fajitas", price: 9.95},
    {item: "Chips and Guacamole", price: 5.25},
    {item: "Sweet Tea", price: 2.79}
    ];

function calculateTotalCost(food){
    let cost=0;
    for (let i = 0; i < food.length; i++) {
         cost += food[i].price;

        
    }
    return cost;
    
}
let cost= calculateTotalCost(lunch)
let tax = cost*.08;
let tip = cost*.18;
let totalCost = cost+tax+tip;


console.log(totalCost.toFixed(2));

