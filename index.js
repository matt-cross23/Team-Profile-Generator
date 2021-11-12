const inquirer = require("inquirer");

inquirer.prompt([
  {
    type: "input",
    message: "What is your name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is your role?",
    name: "role",
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your github username?",
    name: "github",
  },
]);
