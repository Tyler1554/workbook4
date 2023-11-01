let students = [
    {name: "Zephaniah", scores: [100, 96, 99, 92]},
    {name: "Pursalane", scores: [92, 89, 96, 100, 94]},
    {name: "Siddalee", scores: [86, 72, 92]},
    {name: "Ian", scores: [98, 84, 89, 100, 100, 76]},
    {name: "Elisha", scores: [89, 100]},
    {name: "Ezra", scores: [100, 99, 100, 87]}
   ];

   for (let student of students) {
    let sum =0;
    
    for (let score of student.scores){
        sum += score;

    }
        let averageScore = sum/student.scores.length;
        console.log(student.name); 
        console.log(averageScore.toFixed(2)+"\n");
    }
   