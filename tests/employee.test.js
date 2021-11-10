const Employee = require('./lib/Employee');

describe('Returns Employee Object', () => {
it('Should have name, id, and email in the object', () => {
const employee = new Employee('Matthew', 67, "matthewcross1017@gmail.com");
expect(employee.name).toBe(String);
expect(employee.id).toBe(Number);
expect(employee.email).toBe(String);
expect(typeof(employee)).toEqual("object")
});

describe('name'), () => {
it('Should return name of employee')
const name = "Matthew"
const employeeName = new Employee.getName()
expect(employeeName).toBe(name)
});
    
describe('id'), () =>{
    it ('Should return Id of employee')
    const testId = 30;
    const empolyeeId = new Employee.getId()
    expect(empolyeeId).toBe(testId)
});
describe('email'), () =>{
 it ('Should return email of employee')
    const testEmail = matthewcross1017@gmail.com 
    const employeeEmail = new Employee.getEmail()
    expect(employeeEmail).toBe(testEmail)
});
describe('role'), () =>{
 it ('Should return employee as role when employee object is completed')
 const testRole = "Employee"
 const employeeRole = new Employee.getRole()
 expect(employeeRole).toBe(testRole)
}   
