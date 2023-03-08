// class declaration creates new class called Employee
class Employee {
  // constructor function takes 3 parameters
  constructor (name, id, email) {
    // assigning parameters as properties of the object
    this.name = name;
    this.id = id;
    this.email = email;
  }
  // class methods
  // returns values of properties
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return "Employee";
  }
}
// exporting class
module.exports = Employee;