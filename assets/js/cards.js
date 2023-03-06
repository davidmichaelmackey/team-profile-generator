const Employee = require("../../lib/employee.js");
const Intern = require("../../lib/intern.js");

const generateTeam = (team) => {

  const engineerCard = (eng) => {
    return `
      <div class="p-3 m-2 card shadow bg-secondary bg-opacity-25 border border-primary" style="width: 18rem;">
        <div class="card p-3 mb-2 bg-primary bg-opacity-75 text-white border border-primary">
          <h2>${eng.getName()}</h2>
          <h3>${eng.getRole()} 🧑🏻‍💻</h3>
        </div>
        <div class="card-body">
          <p class="p-2 m-1 bg-light border rounded border-primary">ID: ${eng.getId()}</p>
          <p class="p-2 m-1 bg-light border rounded border-primary">Email: <a href="${eng.getEmail()}">${eng.getEmail()}</a></p>
          <p class="p-2 m-1 bg-light border rounded border-primary">GitHub: <a href="https://github.com/${eng.getGitHub()}" target="_blank" rel="noopener noreferrer">${eng.getGitHub()}</a>
          </p>
        </div>
      </div>
`;
  };

  const internCard = (intern) => {
    return `
<div class="p-3 m-2 card shadow bg-secondary bg-opacity-25 border border-primary" style="width: 18rem;">
        <div class="card p-3 mb-2 bg-primary bg-opacity-75 text-white border border-primary">
          <h2>${intern.getName()}</h2>
          <h3>${intern.getRole()} 🎸</h3>
        </div>
        <div class="card-body">
          <p class="p-2 m-1 bg-light border rounded border-primary">ID: ${intern.getId()}</p>
          <p class="p-2 m-1 bg-light border rounded border-primary">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></p>
          <p class="p-2 m-1 bg-light border rounded border-primary">School: ${intern.getSchool()}</p>
        </div>
      </div>
`;
  };

  const managerCard = (man) => {
    return `
<div class="p-3 m-2 card shadow bg-secondary bg-opacity-25 border border-primary" style="width: 18rem;">
        <div class="card p-3 mb-2 bg-primary bg-opacity-75 text-white border border-primary">
          <h2>${man.getName()}</h2>
          <h3>${man.getRole()} ☕️</h3>
        </div>
        <div class="card-body">
          <p class="p-2 m-1 bg-light border rounded border-primary">ID: ${man.getId()}</p>
          <p class="p-2 m-1 bg-light border rounded border-primary">Email: <a href="mailto:${man.getEmail()}">${man.getEmail()}</a></p>
          <p class="p-2 m-1 bg-light border rounded border-primary">Office Number: ${man.getOfficeNumber()}</p>
        </div>
      </div>
`;
  };

  const html = [];

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

  return html.join("");
};

module.exports = (team) => {
  return `<!DOCTYPE html>
<html lang="en">

<head>
    <!-- meta tags -->
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!-- bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <!-- title -->
    <title>Team Profile Generator</title>
</head>
<body>

    <header class="p-5 mb-5 header bg-danger text-white text-center">
      <div class="container">
        <h1>My Team</h1>
      </div>
    </header>

    <main class="d-flex flex-wrap justify-content-center">
        ${generateTeam(team)}
    </main>

</body>
</html>`;
};