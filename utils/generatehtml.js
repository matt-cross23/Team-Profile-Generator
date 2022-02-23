const generateHTML = (team) => {
const createManager = (manager) => {
return `
<div class="card manager-card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Name: ${manager.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Role: ${manager.ID}</h6>
    <p class="card-text">Find me at Office # ${manager.Office-Number}</p>
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
    <h6 class="card-subtitle mb-2 text-muted">Role: ${engineer.Role}</h6>
    <a href="https://github.com/${engineer.Github}" class="card-link">${engineer.Github}</a>
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

}

const generateHTML = (employees) => {
cardArray = [];
  for(let i = 0; i< employees.length; i++) {
  const employee = employees[i]
  const role = employees.getRole();
  if (role === 'manager')
    const managerHTML = createManager(employee);
    
    cardArray.push(managerHTML)
  }
   if (role === 'intern')
    const internHTML = createIntern(employee);
    
    cardArray.push(internHTML)
}
 if (role === 'engineer')
    const engineerHTML = createEngineer(employee);
    
    cardArray.push(engineerHTML)
}
}

const employeeHTML = cardArray.join('');

const generateHTML = function (employeeHTML);
return generateHTML

const generateHTML = (employeeHTML) =>{
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
$(employeeHTML)
</body>
</html>
`;
}

