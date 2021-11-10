const Manager = require("../lib/Manager");
const Employee = require('../lib/Employee");

describe("Should return office number", () => {
const testNumber = 92
const employeeOffice = new Manager("Matthew", 23, "matthewcross1017@gmail.com", testNumber);
expect(employeeOffice.officeNumber).toBe(testNumber);
});

describe("Should return Manager", () => {
const testName = "Manager"
const employeeRole = new Manager("Matthew", 45, "matthewcross1017@gmail.com", 56);
expect(employeRole.getRole()).toBe(testName);
});

describe("Should return office number using getOffice()", () => {
const testOffice = 56;
const employeeONumber = new Manager ("Matthew", 86, "matthewcross1017@gmail.com", testOffice);
expect(employeeONumber.getOffice()).toBe(testOffice);
});
