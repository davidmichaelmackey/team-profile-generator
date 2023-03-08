// importing Employee class from local module employee.js
const Employee = require("./employee.js");
// new class called Engineer that inherits all properties and methods of Employee class
class Engineer extends Employee {
  // constructor function that takes 4 params
  constructor (name, id, email, github) {
    // wwhen new object is created, the constructor function assings the first 3 params as properties ob the object using the super() method to call the parent constructor
    super(name, id, email);
    // also assigns the github param as a new property of the object
    this.github = github;
    this.role = "Engineer";
  }
  // 5 methods
  // first 3 inherited from the employee class and return the values of the properties respectively
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  // method returns the value of github property
  getGithub() {
    return this.github;
  }
  // returns Engineer bc this is the specific role for all Engineer objects created using this class
  getRole() {
    return "Engineer";
  }
}
// exports this class so it can be used in other modules or scripts...
module.exports = Engineer;