const generateHTML = (team) => {
const createManager = (manager) => {
return `
<div class="card manager-card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Name: ${manager.getName()}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Role: ${manager.getRole()}</h6>
    <p class="card-text">Find me at Office # ${manager.getOfficeNumber()}</p>
    <p class="card-text">ID: ${manager.getID()}</p>
    <a href="#${manager.getEmail()}" class="card-link">${manager.getEmail()}</a>
  </div>
</div>
`;
};
const createEngineer = (engineer) => {
return `
<div class="card engineer-card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Name: ${engineer.getName()}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Role: ${engineer.getRole()}</h6>
    <a href="https://github.com/${engineer.getGithub()}" class="card-link">${engineer.getGithub()}</a>
    <p class="card-text">ID: ${engineer.getID()}</p>
    <a href="${engineer.getEmail()}" class="card-link">${engineer.getEmail()}</a>
  </div>
</div>
`;
};

  const createIntern = (intern) => {
return `
<div class="card intern-card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Name: ${intern.getName()}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Role: ${intern.getRole()}</h6>
    <p class="card-text">I am atending ${intern.getSchool()}</p>
    <p class="card-text">ID: ${intern.getID()}</p>
    <a href="#{intern.getEmail()}" class="card-link">${intern.getEmail()}</a>
  </div>
</div>
`;
};
 return [createManager(manager), createEngineer(engineer), createIntern(intern)] 
}
  
module.exports = teamProfile =>{
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
 ${generateHTML(teamProfile)}
</body>
</html>
`;
}

