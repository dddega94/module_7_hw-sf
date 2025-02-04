function setFullName(newName) {
  this.fullName = newName;
}

const person = {
  firstName: "Lebron",
  lastName: "James"
};

const setPersonFullName = setFullName.bind(person);

setPersonFullName("John Smith");

console.log(person.fullName)