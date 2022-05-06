const Employee = require('../lib/Employee');

test('create an employee object', () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe('object');
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
    expect(employee.email).toEqual('madi@gmail');
});

test('get employee role', () => {
    expect(employee.role).toEqual('Employee')
});