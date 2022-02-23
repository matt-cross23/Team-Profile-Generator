const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./utils/generatehtml.js");

const employees = [];

const managerQuestions = () => { 
  return inquirer.prompt([
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
    name: "Office-Number",
  },
])
  .then(answers => {
  const {Name, ID, Email, Office-Number} = answers
  const newManager = new Manager( Name, ID, Email, Office-Number);
    employees.push(newManager);
    console.log(newManager);
  };
const startMenuQuestions () => {
  console.log('Add more employees or finish!');
    
    return inquirer.prompt ([
    type: "list",
    message: "What's the empolyee's role?",
    choices: ["engineer", "Intern"],
    name: "Role",
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
    when: (input) => input.role === "engineer"
    message: "What's the employee's github?",
    name: "Github",
  },
     {
    type: "input",
    when: (input) => input.role === "intern"
    message: "What's the enployee's school?",
    name: "School",
  },
    {
      type: 'confirm',
      name: 'endStartMenu'
      message: 'Press Y to add more memebers',
      default: false
    }
]);
.then(employeeList) => {
let {
Role,
Name,
ID,
Email,
Github,
School,
endStartMenu;
} = employeeList
let newEmployee;
    if ("role === engineer"){
        new Employee = new Engineer (Name, ID, Email, Github)
    console.log(newEmployee)
    }
    else if ("role === intern"){
        new Employee = new Intern (Name, ID, Email, School)
    console.log(newEmployee)
    }
  employees.push(newEmployee)
if(endStartMenu) {
  return newEmployee(employees)
} else {
  console.log(employees);
  return employees
}
newManager()
.then(newEmployee)
 .then(employees => { 
return generateHTML(employees);
})
.then(HTML => {
  fs.writeFileSync("./dist/scorecard.html", generateHTML(HTML), function (err) {
     err
     ? console.log("error")
     : console.log("You've created the HTML file!");
    });
  });
  
// const engineerQuestions = [
//   {
//     type: "input",
//     message: "What is their name?",
//     name: "name",
//   },
//   {
//     type: "input",
//     message: "Employee ID?",
//     name: "ID",
//   },
//   {
//     type: "input",
//     message: "What is your email address?",
//     name: "email",
//   },
//   {
//     type: "input",
//     message: "What is your github",
//     name: "github",
//   },
// ];
// const internQuestions = [
//   {
//     type: "input",
//     message: "What is your name?",
//     name: "name",
//   },
//   {
//     type: "input",
//     message: "Employee ID?",
//     name: "ID",
//   },
//   {
//     type: "input",
//     message: "What is your email address?",
//     name: "email",
//   },
//   {
//     type: "input",
//     message: "What school did you attend",
//     name: "school",
//   },
  
 
// ]);
  
  
  
  
  
// function engineerPrompt() {
//   inquirer.prompt(engineerQuestions).then((answers) => {
//     employees.push(answers);
//     menuPrompt()
//   });
// }
// function internPrompt() {
//   inquirer.prompt(internQuestions).then((answers) => {
//     employees.push(answers);
//     menuPrompt()
//   });
// }
// function menuPrompt() {
//   inquirer.prompt(startMenuQuestions).then((answers) => {
//     console.log(answers)
//     switch (answers.Menu) {
//       case "engineer":
//         engineerPrompt();
//         break;
//       case "Intern":
//         internPrompt();
//         break;
//       default:
//         const generatedHTML = generateHTML(answers);
//         console.log(generatedHTML);
//     };
//   });
// }
  
// function init() {
//   managerQuestions()
//     .then((answers) 
//     .then(teamArray ->{
//     )      => {
//     employees.push(answers);
//     menuPrompt();
//   fs.writeFileSync("./dist/scorecard.html", generateHTML(answers), function (err) {
//      err
//      ? console.log("error")
//      : console.log("You've created the HTML file!");
//     });
//   });
// }
// init();
