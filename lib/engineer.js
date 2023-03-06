const Employee = require("./employee.js");

class Engineer extends Employee {
  constructor (name, id, email, github) {
    super(name, id, email);
    this.github = github;
    this.role = "Engineer";
  }
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getGitHub() {
    return this.github;
  }
  getRole() {
    return this.role;
  }
}

module.exports = Engineer;