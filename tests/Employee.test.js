const Employee = require('../library/Employee');
// make employee object
test('Creates an Employee object', () => {
    const employee = new Employee('Employee', '6969', 'employee_email@proxy.com');

    expect(employee.employeeName).toEqual(expect.any(String));
    expect(employee.employeeID).toEqual(expect.any(String));
    expect(employee.employeeEmail).toEqual(expect.any(String));
});
//get name function
test('Pull employee name', () => {
    const employee = new Employee('Employee', '6969', 'employee_email@proxy.com');

    expect(employee.getName()).toEqual(expect.any(String))
});
//get ID
test('Pull employee id', () => {
    const employee = new Employee('Employee', '6969', 'employee_email@proxy.com');

    expect(employee.getID ()).toEqual(expect.any(String))
});
//test to grab email
test('Pull employee email', () => {
    const employee = new Employee('Employee', '6969', 'employee_email@proxy.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining('@')); //means the email must have an @
});

//test to get role
test('Pull role', () => {
    const employee = new Employee('Employee', '6969', 'employee_email@proxy.com');

    expect(employee.getRole()).toEqual(expect.stringContaining('Employee')) // meanas they hhave to put employee
})