const Manager = require("../lib/manager");

class Engineer extends Manager {
  constructor(name, id, email, github) {
    super(name, id, email);
    
    this.github = github;

  }
  getRole() {
    return "Engineer";
  }
}
module.exports = Engineer;
