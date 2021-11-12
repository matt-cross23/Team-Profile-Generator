const Manager = require("../lib/manager");

class Engineer extends Manager {
  constructor(name, id, email, github, role) {
    super(name, id, email);
    this.github = github;
    this.role = role;
  }
  getRole() {
    return "Engineer";
  }
}
module.exports = Engineer;
