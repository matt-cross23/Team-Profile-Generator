
const createManager = (manager) => {
  return `
<div class="card manager-card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Name: ${manager.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Role: ${manager.getRole()}</h6>
    <p class="card-text">Find me at Office # ${manager.officeNum}</p>
    <p class="card-text">ID: ${manager.id}</p>
    <a href="#${manager.email}" class="card-link">${manager.email}</a>
  </div>
</div>
`;
};
const createEngineer = (engineer) => {
  return `
<div class="card engineer-card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Name: ${engineer.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${engineer.getRole()} </h6>
    <a href="https://github.com/${engineer.github}" class="card-link">${
    engineer.github
  }</a>
    <p class="card-text">ID: ${engineer.id}</p>
    <a href="${engineer.email}" class="card-link">${engineer.email}</a>
  </div>
</div>
`;
};

const createIntern = (intern) => {
  return `
<div class="card intern-card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Name: ${intern.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Role: ${intern.getRole()}</h6>
    <p class="card-text">I am atending ${intern.getSchool()}</p>
    <p class="card-text">ID: ${intern.id}</p>
    <a href="#${intern.email}" class="card-link">${intern.email}</a>
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
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">The Team: </h1>
  </div>
</div>
${employeeHTML}
</body>
</html>
`;
};

module.exports = generateHTML;