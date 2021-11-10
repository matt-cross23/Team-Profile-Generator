const Employee = require('./lib/Employee');

describe('Returns Employee Object', () => {
it('Should have name, id, and email in the object', () => {
const employee = new Employee('Matthew', 67, "matthewcross1017@gmail.com");
expect(employee.name).toBe(String);
expect(employee.id).toBe(Number);
expect(employee.email).toBe(String);
expect(typeof(employee)).toEqual("object");
});

describe('name'), () => {
it('Should return name of employee');
const name = "Matthew";
const employeeName = new Employee(name);
expect(employeeName).toBe(name);
});
    
describe('id'), () =>{
it ('Should return Id of employee');
const testId = 30;
const empolyeeId = new Employee("Matthew", testId);
    expect(empolyeeId.id).toBe(testId);
});
    
describe('email'), () =>{
it ('Should return email of employee');
const testEmail = matthewcross1017@gmail.com ;
const employeeEmail = new Employee("Matthew", 84, testEmail);
expect(employeeEmail.email).toBe(testEmail);
});
describe('GetName'), () =>{
it('Check if GetName() works');
const testName = "matthew";
const employeeName = new Employee(testName);
expect(emloyeeName.getName()).toBe(testName);
});
describe('GetId'), () =>{
it('Check if GetId() works');
const testId = 56;
const employeeName = new Employee("Matthew", testId);
expect(emloyeeName.getId()).toBe(testId);
});
describe('GetEmail'), () =>{
it('Check if GetEmail() works');
    const testEmail = matthewcross1017@gmail.com;
    const employeeName = new Employee("Matthew", 60, testEmail);
    expect(emloyeeName.getEmail()).toBe(testEmail);
});
describe('role'), () =>{
 it ('Should return employee as role when employee object is completed');
 const testRole = "Employee";
 const employeeRole = new Employee("Matthew", 73, "matthewcross1017@gmail.com");
 expect(employeeRole).toBe(testRole);
}  


