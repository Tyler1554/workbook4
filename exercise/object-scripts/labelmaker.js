let contact = {
    name: "Tyler", 
    address: "123 hello",
    city: "Jeannette", 
    state: "pennsylvania", 
    zip : "15644",


}
function printContact(contact){
  let message = `${contact.name} \n${contact.address} \n${contact.city}, ${contact.state} ${contact.zip}`;
  console.log(message);
}
printContact(contact);