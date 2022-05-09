const Employee = require('../lib/Employee');

test('create an employee object', () => {
    const employee = new Employee();
    expect(typeof(employee)).toEqual('object');
});

test('get employee name', () => {
    const employee = new Employee('Madison');
    expect(employee.name).toEqual('Madison');
});

test('get employee id', () => {
    const employee = new Employee('Madison', 222, 'madi@gmail.com');
    expect(employee.id).toEqual(222);
});

test('get employee email', () => {
    const employee = new Employee('Madison', 222, 'madi@gmail.com');
    expect(employee.email).toEqual('madi@gmail.com');
});

test('get employee role', () => {
    const employee = new Employee('Madison', 222, 'madi@gmail.com')
    expect(employee.getRole()).toEqual('Employee')
});