const Manager = require("../lib/manager");
const Engineer = require("../lib/engineer");
describe("Returns Engineer Object", () => {
  it("Should have name, id, and email in the object", () => {
    const engineer = new Engineer("Matthew", 67, "matthewcross1017@gmail.com");
    expect(typeof engineer).toEqual("object");
  });
});
describe("Should return github username", () => {
  it("Engineer's github", () => {
    const github = "matt_cross23";
    const enginnerGitHub = new Engineer(
      "Matthew",
      23,
      "matthewcross1017@gmail.com",
      github
    );
    expect(enginnerGitHub.github).toBe(github);
  });
});

describe("Should return Engineer", () => {
  it("Should return that employee is a engineer", () => {
    const testName = "Engineer";
    const engineerRole = new Engineer(
      "Matthew",
      45,
      "matthewcross1017@gmail.com",
      56
    );
    expect(engineerRole.getRole()).toBe(testName);
  });
});
