let myScores= [100, 97, 49, 80, 67, 39];
let yourScores = [99, 89, 78, 48, 97, 46];

function getAverage(scores){
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
    
}
   return sum/scores.length;
   
}

let myAverage = getAverage(myScores);
let yourAverage = getAverage(yourScores);


console.log("My Average: " + myAverage.toFixed(2));
console.log("Your average: " + yourAverage.toFixed(2));

