let academyMembers = [
    {memID: 101,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"]},
    { memID: 142,
    name: "Sallie Smith",
    films: ["A Good Day", "A Better Day"]},
    {memID: 187,
    name: "Fred Flanders",
    films: ["Who is Fred?", "Where is Fred?",
    "What is Fred?", "Why Fred?"]},
    { memID: 203,
    name: "Bobbie Boots",
    films: ["Walking Boots", "Hiking Boots",
    "Cowboy Boots"] },
   ];
   
   function findNameById(academyMembers, memID){
    for (const academymember of academyMembers) {
        if (academymember.memID==memID) {
            return academymember.name;
        }
        
    }

   }
   let name= findNameById(academyMembers, 187);
   console.log(name);


   function countPeopleWithThreeFilms(academyMembers) {
    let count = 0;
    
    for (const member of academyMembers) {
        if (member.films.length >= 3) {
            count++;
        }
    }
    
    return count;
}

let numberOfPeopleWithThreeFilms = countPeopleWithThreeFilms(academyMembers);
console.log(numberOfPeopleWithThreeFilms);




function findPeopleWithBobInName(academyMembers, name) {
    const peopleWithBobInName = [];

    for (const member of academyMembers) {
        if (member.name.includes(name)) {
            peopleWithBobInName.push(member);
        }
    }

    return peopleWithBobInName;
}

const peopleWithBobInName = findPeopleWithBobInName(academyMembers, "Bob");
console.log(peopleWithBobInName);





function filmsStartingWithA(academyMembers, films) {
  let actorsInFilmsWithA = [];
  for (const member of academyMembers) {
    for (const film of member.films) {
        if (film.charAt(0)==films) {
            actorsInFilmsWithA.push(member.name)
            break;
        }
    }
    
        
    }
        return actorsInFilmsWithA;
  }

let actorsWhoHaveBeenInFilm= filmsStartingWithA(academyMembers, "A");
console.log("Actor: " + actorsWhoHaveBeenInFilm);