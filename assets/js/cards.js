// variables
// statement imports from file locations in the lib directory
const Employee = require("../../lib/employee.js");
const Intern = require("../../lib/intern.js");
// generates HTML file to display info about the team
// function that takes one param
const generateTeam = (team) => {
  // 3 inner functions
  // manager card
  const managerCard = (man) => {
    return `
  <div class="p-3 m-5 card shadow bg-white border border-2 border-primary" style="width: 20vw;">
          <div class="card p-3 mb-3 bg-primary bg-opacity-0 text-white border border-primary">
            <h2 class="display-5 text-center">${man.getName()}</h2>
            <h3 class="text-black text-center"><i class="fa-solid fa-mug-hot m-2"></i> ${man.getRole()}</h3>
          </div>
          <div class="card-body">
            <p class="p-3 bg-light border rounded border-primary">ID: ${man.getId()}</p>
            <p class="p-3 bg-light border rounded border-primary">Email: <a href="mailto:${man.getEmail()}">${man.getEmail()}</a></p>
            <p class="p-3 bg-light border rounded border-primary">Office Number: <a href="tel:${man.getOfficeNumber()}">${man.getOfficeNumber()}</a></p>
          </div>
        </div>
        <!-- ! -->
  `;
  };
  // engineer card
  const engineerCard = (eng) => {
    return `
      <div class="p-3 m-5 card shadow bg-white border border-2 border-primary" style="width: 20vw;">
        <div class="card p-3 mb-3 bg-primary bg-opacity-0 text-white border border-primary">
          <h2 class="display-5 text-center">${eng.getName()}</h2>
          <h3 class="text-black text-center"><i class="fa-solid fa-keyboard m-2"></i> ${eng.getRole()}</h3>
        </div>
        <div class="card-body">
          <p class="p-3 bg-light border rounded border-primary">ID: ${eng.getId()}</p>
          <p class="p-3 bg-light border rounded border-primary">Email: <a href="mailto:${eng.getEmail()}">${eng.getEmail()}</a></p>
          <p class="p-3 bg-light border rounded border-primary">GitHub: <a href="https://github.com/${eng.getGithub()}" target="_blank">${eng.getGithub()}</a>
          </p>
        </div>
      </div>
      <!-- ! -->
`;
  };
  // intern card
  const internCard = (intern) => {
    return `
<div class="p-3 m-5 card shadow bg-white border border-2 border-primary" style="width: 20vw;">
        <div class="card p-3 mb-3 bg-primary bg-opacity-0 text-white border border-primary">
          <h2 class="display-5 text-center">${intern.getName()}</h2>
          <h3 class="text-black text-center"><i class="fa-solid fa-hand-back-fist m-2"></i> ${intern.getRole()}</h3>
        </div>
        <div class="card-body">
          <p class="p-3 bg-light border rounded border-primary">ID: ${intern.getId()}</p>
          <p class="p-3 bg-light border rounded border-primary">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></p>
          <p class="p-3 bg-light border rounded border-primary">School: ${intern.getSchool()}</p>
        </div>
      </div>
      <!-- ! -->
`;
  };
  // creates empty array
  const html = [];
  // pushes all elements into this array
  html.push(
    team
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => managerCard(manager))
      .join("")
  );
  html.push(
    team
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => engineerCard(engineer))
      .join("")
  );
  html.push(
    team
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => internCard(intern))
      .join("")
  );
  // returns single string by joining all of the elements together
  return html.join("");
};
// the main template for HTML file that will be generated by the app
// provides a basic structure for the HTML file and sets up necessary links to external resources for styling
module.exports = (team) => {
  return `<!DOCTYPE html>
<html lang="en">

  <head>
    <!-- meta tags -->
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!-- font awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <!-- bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <!-- title -->
    <title>Team Profile Generator</title>
  </head>

  <body>
    <header class="p-5 mb-4 header bg-danger text-white text-center">
      <div class="container">
        <h1 class="display-1">My Team</h1>
      </div>
    </header>
    <!-- ! -->
    <main class="d-flex flex-wrap justify-content-center">
      <!-- ! -->
        ${generateTeam(team)}
    </main>
</body>

</html>`;
};