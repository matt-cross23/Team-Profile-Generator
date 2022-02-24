const createManager = (manager) => {
  return `
<div class="card manager-card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Name: ${manager.Name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Role: ${manager.ID}</h6>
    <p class="card-text">Find me at Office # ${manager.OfficeNumber}</p>
    <p class="card-text">ID: ${manager.ID}</p>
    <a href="#${manager.Email}" class="card-link">${manager.Email}</a>
  </div>
</div>
`;
};
const createEngineer = (engineer) => {
  return `
<div class="card engineer-card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Name: ${engineer.Name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Role: ${engineer.getRole()}</h6>
    <a href="https://github.com/${engineer.Github}" class="card-link">${
    engineer.Github
  }</a>
    <p class="card-text">ID: ${engineer.ID}</p>
    <a href="${engineer.Email}" class="card-link">${engineer.Email}</a>
  </div>
</div>
`;
};

const createIntern = (intern) => {
  return `
<div class="card intern-card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Name: ${intern.Name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Role: ${intern.Role}</h6>
    <p class="card-text">I am atending ${intern.School}</p>
    <p class="card-text">ID: ${intern.ID}</p>
    <a href="#{intern.getEmail()}" class="card-link">${intern.Email}</a>
  </div>
</div>
`;
};

const generateHTML = (data) => {
  cardArray = [];

  for (let i = 0; data.length; i++) {
    console.log("Data here", data, 'Iterating!')
    const employee = data[i];
    const role = employee.role;
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
    if ("Role" === "Engineer") {
     const engineerHTML = createEngineer(employee);
      console.log(engineerHTML);
      cardArray.push(engineerHTML);
    }
  }

  const employeeHTML = cardArray.join("");

  const generateScorecard = generatehtml(employeeHTML);
  return generateScorecard;
};

const generatehtml = (employeeHTML) => {
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
