const managerQuestions = [
  {
    name: "name",
    type: "input",
    message: "Enter your name: ",
  },
  {
    name: "id",
    type: "input",
    message: "Give yourself an id: ",
  },
  {
    name: "email",
    type: "input",
    message: "Enter your email: ",
  },
  {
    name: "officeNumber",
    type: "input",
    message: "Enter your office number: ",
  },
];

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

const teamBuild = [
  {
    name: "addMember",
    type: "list",
    message: "Which employee type would you like to add?",
    choices: ["Engineer", "Intern", "Done"],
    default: "Done",
  },
];

module.exports = {
  managerQuestions,
  engineerQuestions,
  internQuestions,
  teamBuild,
};