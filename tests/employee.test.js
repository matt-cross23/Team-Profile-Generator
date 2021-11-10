const Employee = require('./lib/Employee');

describe('Employee Object', () => {
it('Should have name, id, and email in the object', () =>{
const employee = new Employee('Matthew', 90, "matthewcross1017@gmail.com");
expect(employee.name).toBe(String);
expect(employee.id).toBe(Number);
expect(employee.email).toBe(String);
});
describe('name'), () => {
it('Should return name of employee')
const name = "Matthew"
const person = new Employee(name)
expect(person.getName()).toBe(name)
}
describe('id'), () =>{
    it ('Should return Id of employee')
    const testId = 30;
    const empolyeeId = new Employee(id)
    expect(empolyee.getId()).toBe(id)

}
});