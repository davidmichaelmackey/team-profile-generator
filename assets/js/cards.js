const Employee = require("../../lib/employee.js");
const Intern = require("../../lib/intern.js");

const generateTeam = (team) => {

    const engineerCard = (engine) => {
        return `
<div class="card m-5">
                <header class="card-header">
                    <p class="card-header-title has-background-info has-text-white is-centered">
                        ${engine.getName()}
                    </p>
                    <p class="card-header-title has-background-info has-text-white is-centered">
                        ${engine.getRole()} <i class="fa-solid fa-code ml-2"></i>
                    </p>
                </header>
                <div class="card-content has-background-white-ter">
                    <div class="content">
                        <table class="table is-bordered is-hoverable">
                            <thead>
                                <tr>
                                    <th>ID: ${engine.getId()}</th>
                                </tr>
                                <tr>
                                    <th>Email: <a href="mailto:${engine.getEmail()}">${engine.getEmail()}</a></th>
                                </tr>
                                <tr>
                                    <th>GitHub: <a href="https://www.github.com/${engine.getGitHub()}" target="_blank" rel="noopener noreferrer">${eng.getGitHub()}</a></th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
`;
    };

    const internCard = (intern) => {
        return `
<div class="card m-5">
                <header class="card-header">
                    <p class="card-header-title has-background-info has-text-white is-centered">
                        ${intern.getName()}
                    </p>
                    <p class="card-header-title has-background-info has-text-white is-centered">
                        ${intern.getRole()} <i class="fa-solid fa-graduation-cap ml-2"></i>
                    </p>
                </header>
                <div class="card-content has-background-white-ter">
                    <div class="content">
                        <table class="table is-bordered is-hoverable">
                            <thead>
                                <tr>
                                    <th>ID: ${intern.getId()}</th>
                                </tr>
                                <tr>
                                    <th>Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></th>
                                </tr>
                                <tr>
                                    <th>School: ${intern.getSchool()}</a></th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
`;
    };

    const managerCard = (manage) => {
        return `
<div class="card m-5">
                <header class="card-header">
                    <p class="card-header-title has-background-info has-text-white is-centered">
                        ${manage.getName()}
                    </p>
                    <p class="card-header-title has-background-info has-text-white is-centered">
                        ${manage.getRole()} <i class="fa-brands fa-apple ml-2"></i>
                    </p>
                </header>
                <div class="card-content has-background-white-ter">
                    <div class="content">
                        <table class="table is-bordered is-hoverable">
                            <thead>
                                <tr>
                                    <th>ID: ${manage.getId()}</th>
                                </tr>
                                <tr>
                                    <th>Email: <a href="mailto:${manage.getEmail()}">${manage.getEmail()}</a></th>
                                </tr>
                                <tr>
                                    <th>Office #: ${manage.getOfficeNumber()}</a></th>
                                </tr>
                            </thead>
                        </table>
                    </div>
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
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.4/css/bulma.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" />
    <title>Template</title>
</head>
<body>
    <!-- Title Hero Section -->
    <section class="hero is-danger">
        <div class="columns is-centered m-5">
            <p class="title is-1">Your Team Profile</p>
        </div>
    </section>
    <!-- Cards Section -->
    <div class="columns is-multiline is-centered is-mobile" id="cards-insert">
        ${generateTeam(team)}
    </div>
    <!-- End -->
</body>
</html>`;
};