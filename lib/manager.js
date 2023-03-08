// importing Employee class from local module employee.js
const Employee = require("./employee.js");
// new class called Manager that inherits all properties and methods of Employee class
class Manager extends Employee {
  // constructor method that takes in 4 params
  constructor (name, id, email, officeNumber) {
    // super() method to call the parent constructor
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  // 4 methods
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
  // method returns the value of officeNumber property
  getOfficeNumber() {
    return this.officeNumber;
  }
  // method returns Manager bc this is the specific role for all Manager objects created using this class
  getRole() {
    return "Manager";
  }
}
// exports class to be used in other modules or scripts
module.exports = Manager;