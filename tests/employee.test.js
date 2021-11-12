const Employee = require('../lib/employee');

describe('Returns Employee Object', () => {
it('Should have name, id, and email in the object', () => {
const employee = new Employee('Matthew', 67, "matthewcross1017@gmail.com");
expect(typeof(employee)).toEqual("object");
});
});
describe('name', () => {
it('Should return name of employee', () => {
const name = "Matthew";
const employeeName = new Employee(name);
expect(employeeName.name).toBe(name);
})
});    
describe('id', () =>{
    it('Should return name of employee', () => {
        const testId = 30;
const empolyeeId = new Employee("Matthew", testId);
    expect(empolyeeId.id).toBe(testId);
})
});   
describe('email', () =>{
    it('Should return name of employee', () => {
const testEmail = "matthewcross1017@gmail.com" ;
const employeeEmail = new Employee("Matthew", 84, testEmail);
expect(employeeEmail.email).toBe(testEmail);
})
});
describe('GetName', () =>{
    it('Should return name of employee', () => {
const testName = "matthew";
const employeeName = new Employee(testName);
expect(employeeName.getName()).toBe(testName);
})
});
describe('GetId', () =>{
    it('Should return name of employee', () => {
const testId = 56;
const employeeName = new Employee("Matthew", testId);
expect(employeeName.getId()).toBe(testId);
})
});
describe('GetEmail', () =>{
    it('Should return name of employee', () => {
    const testEmail = "matthewcross1017@gmail.com";
    const employeeName = new Employee("Matthew", 60, testEmail);
    expect(employeeName.getEmail()).toBe(testEmail);
})
});
describe('role', () =>{
    it('The return role function should work', () => {
 const testRole = "Employee";
 const employeeRole = new Employee("Matthew", 73, "matthewcross1017@gmail.com");
 expect(employeeRole.getRole()).toBe(testRole);
}) 
});
