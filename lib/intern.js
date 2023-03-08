// importing Employee class from local module employee.js
const Employee = require("./employee.js");
// new class called Intern that inherits all properties and methods of Employee class
class Intern extends Employee {
  // constructor function that takes in 4 params
  constructor (name, id, email, school) {
    //  assigns the first 3 params as properties of the object using the super() method to call the parent constructor
    super(name, id, email, school);
    this.school = school;
  }
  // 5 methods
  // first 3 inherited from Employee class
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  // method returns the value of the school property
  getSchool() {
    return this.school;
  }
  // returns Intern because this is the specific role for all Intern objects created
  getRole() {
    return "Intern";
  }
}
// exports class to be used in other modules or scripts
module.exports = Intern;