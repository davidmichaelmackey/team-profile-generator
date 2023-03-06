// node modules
const inquirer = require("inquirer"); // a powerful and easy-to-use interface for interacting with users in the command line
const fs = require("fs"); // provides an api for interacting with the file system
// lib modules
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js");
const Manager = require("./lib/manager.js");
// js module
const generateTeam = require("./assets/js/cards.js"); // function import
// path module
const path = require("path"); // provides utilities for working with file and directory paths
// questions
const {
  managerQuestions,
  engineerQuestions,
  internQuestions,
  teamBuild,
} = require("./assets/js/questions.js");
// team array
let teamArray = [];
// app object
const app = {
  init: async () => { // when app starts
    await inquirer.prompt(managerQuestions).then((data) => { // prompts user for info about the team's manager
      let manager = new Manager( // creates new manager instance using user's input
        data.name,
        data.id,
        data.email,
        data.officeNumber
      );
      teamArray.push(manager); // adds to team array
    });
    app.promptTeamBuild();
  },
  // called after the manager has been added to team array
  promptTeamBuild: async () => {
    await inquirer.prompt(teamBuild).then((data) => { // prompts user to add more team members using method
      switch (data.addMember) {
        case "Engineer":
          app.addEngineer();
          break;
        case "Intern":
          app.addIntern();
          break;
        case "Done":
          app.writeHtml();
      }
    });
  },
  // engineer
  addEngineer: async () => {
    await inquirer.prompt(engineerQuestions).then((data) => {
      let engineer = new Engineer(data.name, data.id, data.email, data.github);
      teamArray.push(engineer);
    });
    app.promptTeamBuild();
  },
  // intern
  addIntern: async () => {
    await inquirer.prompt(internQuestions).then((data) => {
      let intern = new Intern(data.name, data.id, data.email, data.school);
      teamArray.push(intern);
    });
    app.promptTeamBuild();
  },
  // html
  writeHtml: () => {
    function writeToFile(fileName, data) {
      return fs.writeFileSync(path.join(process.cwd(), fileName), data);
    }
    writeToFile("./dist/team.html", generateTeam(teamArray));
    console.log(`
      Team profile generated!
      `);
  },
};

app.init();