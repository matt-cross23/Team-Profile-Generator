
const createManager = (manager) => {
  return `
  <div class='row align-items-center cards'>
<div class="card manager-card col" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title display-5">Name: ${manager.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted lead">Role: ${manager.getRole()}</h6>
    <p class="card-text">Find me at Office # ${manager.officeNum}</p>
    <p class="card-text">ID: ${manager.id}</p>
    <a href="mailto: ${manager.email}" class="card-link">email me @${manager.email}</a>
  </div>
</div>

`;
};
const createEngineer = (engineer) => {
  return `
<div class="card engineer-card col" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Name: ${engineer.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Role: ${engineer.getRole()} </h6>
    <a href="https://github.com/${engineer.github}" class="card-link">Github: ${
    engineer.github
  }</a>
    <p class="card-text">ID: ${engineer.id}</p>
    <a href="mailto: ${engineer.email}" class="card-link"> email me @${engineer.email}</a>
  </div>
</div>
`;
};

const createIntern = (intern) => {
  return `
<div class="card intern-card col" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Name: ${intern.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Role: ${intern.getRole()}</h6>
    <p class="card-text">I am attending ${intern.getSchool()}</p>
    <p class="card-text">ID: ${intern.id}</p>
    <a href="mailto: ${intern.email}" class="card-link">email me @${intern.email}</a>
  </div>
</div>
`;
};

const generateHTML = (data) => {
  let cardArray = [];
console.log("This is the array before iterating", data)
  for (let i = 0; i < data.length; i++) {
   
    console.log("Data here", data, 'Iterating!')
    
    const employee = data[i];
    const role = employee.getRole();
    console.log(role)
    if (role === "Manager") {
      const managerHTML = createManager(employee);
      console.log(managerHTML);
      cardArray.push(managerHTML);
    }
    if (role === "Intern") {
      const internHTML = createIntern(employee);
      console.log(internHTML);
      cardArray.push(internHTML);
    }
    if (role === "Engineer") {
     const engineerHTML = createEngineer(employee);
      console.log(engineerHTML);
      cardArray.push(engineerHTML);
    }
  }

  const employeeHTML = cardArray.join("");

  const generateScorecard = generateTeam(employeeHTML);
  return generateScorecard;
};

const generateTeam = (employeeHTML) => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">

  <title>Team Profile</title>
</head>
<body class ="bg-secondary text-black">

  <div class="jumbotron jumbotron-fluid">
  <div class="container p-2 bd-highlight">
  <header class= "display-3 w-100"> Generate Your Team with Ease!</header>
  </div>
</div>
   <h1 class="d-inline display-4 "> The Team: </h1>
${employeeHTML}
</div>
</body>
</html>

`;
};

module.exports = generateHTML;
