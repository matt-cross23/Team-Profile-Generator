const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./utils/generatehtml");
const employees = [];

const managerQuestions = [
  {
    type: "input",
    message: "What is your name?",
    name: "name",
  },
  {
    type: "input",
    message: "Employee ID?",
    name: "ID",
  },
  {
    type: "input",
    message: "What is your email address",
    name: "email",
  },
  {
    type: "input",
    message: "Office number",
    name: "Office-Number",
  },
];
const startMenuQuestions = [
  {
    type: "list",
    message: "Would you like to add a Team member?",
    choices: ["engineer", "Intern", "No"],
    name: "Menu",
  },
];

const engineerQuestions = [
  {
    type: "input",
    message: "What is their name?",
    name: "name",
  },
  {
    type: "input",
    message: "Employee ID?",
    name: "ID",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your github",
    name: "github",
  },
];
const internQuestions = [
  {
    type: "input",
    message: "What is your name?",
    name: "name",
  },
  {
    type: "input",
    message: "Employee ID?",
    name: "ID",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What school did you attend",
    name: "school",
  },
];
function engineerPrompt() {
  inquirer.prompt(engineerQuestions).then((answers) => {
    employees.push(answers);
    menuPrompt()
  });
}
function internPrompt() {
  inquirer.prompt(internQuestions).then((answers) => {
    employees.push(answers);
    menuPrompt()
  });
}
function menuPrompt() {
  inquirer.prompt(startMenuQuestions).then((answers) => {
    console.log(answers)
    switch (answers.Menu) {
      case "engineer":
        engineerPrompt();
        break;
      case "Intern":
        internPrompt();
        break;
      default:
        const generatedHTML = generateHTML(answers);
        console.log(generatedHTML);
    };
  
function init() {
  inquirer.prompt(managerQuestions).then((answers) => {
    employees.push(answers);
    menuPrompt();
  .then((answers => fs.writeFileSync("./dist/scorecard.html", generatedHTML, function (err) {
     err
     ? console.log("error")
     : console.log("You've created the HTML file!");
    });
  });
}
init();
