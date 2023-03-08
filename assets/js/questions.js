// contains array of questions to prompt user to enter info about a manager
const managerQuestions = [
  {
    name: "name",
    type: "input",
    message: "Enter manager name: ",
  },
  {
    name: "id",
    type: "input",
    message: "Enter manager id: ",
  },
  {
    name: "email",
    type: "input",
    message: "Enter manager email: ",
  },
  {
    name: "officeNumber",
    type: "input",
    message: "Enter office number: ",
  },
];
// contains array of questions to prompt user to enter info about an engineer
const engineerQuestions = [
  {
    name: "name",
    type: "input",
    message: "Enter engineer name: ",
  },
  {
    name: "id",
    type: "input",
    message: "Enter engineer id: ",
  },
  {
    name: "email",
    type: "input",
    message: "Enter engineer email: ",
  },
  {
    name: "github",
    type: "input",
    message: "Enter engineer github: ",
  },
];
// contains array of questions to prompt user to enter info about an intern
const internQuestions = [
  {
    name: "name",
    type: "input",
    message: "Enter intern name: ",
  },
  {
    name: "id",
    type: "input",
    message: "Enter intern id: ",
  },
  {
    name: "email",
    type: "input",
    message: "Enter intern email: ",
  },
  {
    name: "school",
    type: "input",
    message: "Enter intern school: ",
  },
];
// contains list of choices to prompt the user to select which type of employee they would like to add to their team
const teamBuild = [
  {
    name: "addMember",
    type: "list",
    message: "Which employee type would you like to add?",
    choices: ["Engineer", "Intern", "Done"],
    default: "Done",
  },
];
// this module exports 4 arrays
// setting them as properties of a single object
module.exports = {
  managerQuestions,
  engineerQuestions,
  internQuestions,
  teamBuild,
};