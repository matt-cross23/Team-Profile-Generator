const Intern = require("../lib/intern");
const Employee = require("../lib/employee");

describe("The Intern object", () => {
  it("Should return Intern object", () => {
    const intern = new Intern(
      "matthew",
      56,
      "matthewcross1017@gmail.com",
      "Peperdine U"
    );
    expect(typeof intern).toEqual("object");
  });
});
describe("School function", () => {
  it("Should return the school of the employee", () => {
    const school = "Smart University";
    const intern = new Intern(
      "matthew",
      34,
      "matthewcross1017@gmail.com",
      school
    );
    expect(intern.getSchool()).toBe(school);
  });
});
describe("role", () => {
  it("The return role function should work", () => {
    const testRole = "Intern";
    const employeeRole = new Intern(
      "Matthew",
      73,
      "matthewcross1017@gmail.com"
    );
    expect(employeeRole.getRole()).toBe(testRole);
  });
});
