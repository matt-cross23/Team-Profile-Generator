const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require("./utils/generateMarkdown.js")
const questions = [
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
      },
      {
        type: 'checkbox',
        message: 'What is your role?',
        choices: [employee, engineer, manager, Intern]
        name: 'role',
      },
      {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
      },
      {
        type: 'input',
        message: 'What is your github username?',
        name: 'github',
      }
];
function init(){
    inquirer
    .prompt(questions)
    .then((answers) => {
      const generatedHTML = generateMarkdown(answers);
  console.log(generatedHTML)
  
    
      fs.writeFile("./dist/scorecard.html", generatedHTML, function (err) {
       err ? console.log("error") : console.log("You've created the HTML file!");
    })
  });
  }
 init()
