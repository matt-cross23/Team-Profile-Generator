const Employee = require("../lib/employee");

class Manager extends Employee {
  constructor(name, id, email, officeNum, role) {
    super(name, id, email);

    this.officeNum = officeNum;
    this.role = role;
  }
  getOffice() {
    return this.officeNum;
  }
  getRole() {
    return "Manager";
  }
}
module.exports = Manager;
