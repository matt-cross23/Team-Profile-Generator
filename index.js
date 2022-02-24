const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
const generateHTML = require("./utils/generatehtml");

const employeeArray = [];

const managerQuestions = async () => {
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
      const { Name, ID, Email, OfficeNumber, role} = managerAnswers;
      const newManager = new Manager(Name, ID, Email, OfficeNumber, role);
      employeeArray.push(newManager);
      console.log(newManager, "How is being a manager?");
    });
};

const startMenuQuestions = async () => {
  console.log("Add more employees or finish!");

  return await inquirer
    .prompt([
      {
        type: "list",
        message: "What's the empolyee's role?",
        choices: ["engineer", "intern"],
        name: "role",
      },

      {
        type: "input",
        message: "Enter the employee's name",
        name: "Name",
      },
      {
        type: "input",
        message: "Enter the employee's ID",
        name: "ID",
      },
      {
        type: "input",
        message: "Enter them employee's email address",
        name: "Email",
      },
      {
        type: "input",
        when: (input) => input.role === "engineer",
        message: "What's the employee's github?",
        name: "Github",
      },
      {
        type: "input",
        when: (input) => input.role === "intern",
        message: "What's the employee's school?",
        name: "School",
      },
      {
        type: "input",
        name: "role",
        message: "Please enter your role",
      },
      {
        type: "confirm",
        name: "endStartMenu",
        message: "Press Y to add more employees",
        default: true,
      },
    ])
    .then((employeeAnswers) => {
      let { Name, ID, Email, Github, School, endStartMenu, Role } =
        employeeAnswers;

      let newEmployee;

      if (Role == "engineer") {
        newEmployee = new Engineer(Name, ID, Email, Github);
        
        console.log(newEmployee, "New Engineer added");

      } else if (Role === "intern") {
        newEmployee = new Intern(Name, ID, Email, School);
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

const writeFileSync = (data) => {
  fs.writeFileSync("./dist/scorecard.html", generateHTML(data), "utf8", function (err) {
    err ? console.log("error") : console.log("You've created the HTML file!");
  });
};

function init (){
managerQuestions()
  .then(startMenuQuestions)
  .then((employeeArray) => {
    console.log("Your team is", employeeArray, "!");
   console.log( typeof employeeArray)
    return generateHTML(employeeArray);
  })
  .then((data) => {
    return writeFileSync(data, "utf8");
  })
  .catch((err) => {
    console.log(err);
  });
}

init()
