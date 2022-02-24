const Manager = require("../lib/manager");
const Employee = require('../lib/employee');

describe("Should return office number", () => {
  it("Manager's office #", () => {
  const testNumber = 92;
  const employeeOffice = new Manager(
    "Matthew",
    23,
    "matthewcross1017@gmail.com",
    testNumber,
  );
  expect(employeeOffice.officeNum).toBe(testNumber);
  })
});

describe("Should return Manager", () => {
  it("Should return that employee is a manager" , () => {;
  const testName = "Manager";
  const employeeRole = new Manager(
    "Matthew",
    45,
    "matthewcross1017@gmail.com",
    56
  );
  expect(employeeRole.getRole()).toBe(testName);
  })
});

