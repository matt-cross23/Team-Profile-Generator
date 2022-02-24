const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
const generateHTML = require("./utils/generatehtml");

const employeeArray = [];

const managerQuestions = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        message: "What is the manager's name?",
        name: "Name",
      },
      {
        type: "input",
        message: "Enter the manager's ID",
        name: "ID",
      },
      {
        type: "input",
        message: "Enter your email address",
        name: "Email",
      },
      {
        type: "input",
        message: "Enter the Office number",
        name: "OfficeNumber",
      },
    ])
    .then((managerAnswers) => {
      const { Name, ID, Email, OfficeNumber} = managerAnswers;
      const newManager = new Manager(Name, ID, Email, OfficeNumber);
      employeeArray.push(newManager);
      console.log(newManager, "How is being a manager?");
    });
};

const startMenuQuestions = () =>{
  console.log("Add more employees or finish!");

  return inquirer
    .prompt([
      {
        type: "list",
        message: "What's the empolyee's role?",
        choices: ["Engineer", "Intern"],
        name: "role",
      },

      {
        type: "input",
        message: "Enter the employee's name",
        name: "name",
      },
      {
        type: "input",
        message: "Enter the employee's ID",
        name: "id",
      },
      {
        type: "input",
        message: "Enter them employee's email address",
        name: "email",
      },
      {
        type: "input",
        when: (input) => input.role === "Engineer",
        message: "What's the employee's github?",
        name: "github",
      },
      {
        type: "input",
        when: (input) => input.role === "Intern",
        message: "What's the employee's school?",
        name: "school",
      },
     
      {
        type: "confirm",
        name: "endStartMenu",
        message: "Press Y to add more employees",
        default: true,
      },
    ])
    .then((employeeAnswers) => {
      let { name, id, email, github, school, endStartMenu, role} =
        employeeAnswers;
  
      let newEmployee;

      if (role == "Engineer") {
        newEmployee = new Engineer(name, id, email, github);
        
        console.log(newEmployee, "New Engineer added");

      } else if (role === "Intern") {
        newEmployee = new Intern(name, id, email, school);
        console.log(newEmployee, "New Intern added");
      }

      employeeArray.push(newEmployee);
      if (endStartMenu) {
        console.log(newEmployee, "Your employee was added");
        return startMenuQuestions();
      } else {
        console.log(employeeArray);
        return employeeArray;
      }
    });
};

function writeToFile(data) {
  writeToFile("./dist/scorecard.html", generateHTML(data), "utf8", function (err) {
    err ? console.log("error") : console.log("You've created the HTML file!");
  });
};

function init (){
managerQuestions()
  .then(startMenuQuestions)
  .then((employeeArray) => {
    console.log("Your team is", employeeArray, "!");
    return generateHTML(employeeArray);
  })
  .then((data) => {
    return writeToFile(data, "utf8");
  })
  .catch((err) => {
    console.log(err);
  });
}

init()
