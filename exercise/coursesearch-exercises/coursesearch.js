let courses = [
  {
    CourseId: "PROG100",
    Title: "Introduction to HTML/CSS/Git",
    Location: "Classroom 7",
    StartDate: "09/08/22",
    Fee: "100.00",
  },
  {
    CourseId: "PROG200",
    Title: "Introduction to JavaScript",
    Location: "Classroom 9",
    StartDate: "11/22/22",
    Fee: "350.00",
  },
  {
    CourseId: "PROG300",
    Title: "Introduction to Java",
    Location: "Classroom 1",
    StartDate: "01/09/23",
    Fee: "50.00",
  },
  {
    CourseId: "PROG400",
    Title: "Introduction to SQL and Databases",
    Location: "Classroom 7",
    StartDate: "03/16/23",
    Fee: "50.00",
  },
  {
    CourseId: "PROJ500",
    Title: "Introduction to Angular",
    Location: "Classroom 1",
    StartDate: "04/25/23",
    Fee: "50.00",
  },
];

function getCourseStartDate(courses, courseId) {
    //currentcourse = name for single object in array 
  for (const currentcourse of courses) {
    if (currentcourse.CourseId == courseId) {
      return currentcourse.StartDate;
    }
  }
  return "Does Not Exist";
}

let date = getCourseStartDate(courses, "PROG200");
console.log("Start Date: " + date);


function getTitleById (courses, courseId){
    for (const course of courses) {
    if (course.CourseId==courseId) {
        return course.Title;
    }
        
    }
    return "Does Not Exist";
}
let title = getTitleById(courses, "PROJ500")
console.log(`Course Id: ${title}`);




function coursesByCost (courses, fee){
    let coursesUnderFifty = [];
    for (const course of courses) {
        if (course.Fee<=fee){
        coursesUnderFifty.push(course.Title)
        }
       
    }
    return coursesUnderFifty;
}
let cost= coursesByCost(courses, 50.00)
console.log(`Course: ${cost}`); 





function classroomOneMeetings(courses, Location){
    let roomOneClass= [];
    for (const course of courses) {
        if(course.Location==Location){
            roomOneClass.push(course.Title)
        }
    }
    return roomOneClass
}
let class1= classroomOneMeetings(courses, "Classroom 1")
console.log(`Course Title: ${class1}`);