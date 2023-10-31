// let employeeId= "1";
// let name = "Ezra";
// let jobTitle = "Theatre Teacher";
// let payRate= 38.46;

//how to make an object
let ezraEmployee= {
employeeId : "1",
name : "Ezra",
jobTitle : "Theatre Teacher",
payRate : 38.46,
}

//using the objectname.propertyname lets you access particular parts of the object
console.log(ezraEmployee.name);
//to use more than one 
console.log(ezraEmployee.name, ezraEmployee.employeeId);


function printEmployee(employee){
    console.log(employee);
}
printEmployee(ezraEmployee)

   
function changeNameToNonBiblical(ezraEmployee){
    ezraEmployee.name = "Craig";
    return ezraEmployee;
}
let updateEmployee= changeNameToNonBiblical(ezraEmployee)
console.log(updateEmployee);
