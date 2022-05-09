const Manager = require('../lib/Manager');
const Employee = require("../lib/Employee");

test('create a manager object', () => {
    const manager = new Manager('Nicole', 108, 'nicole@gmail.com', 108);
    expect(manager.officeNumber).toEqual(108);
});

test('gets role', () => {
    const manager = new Manager('Nicole', 108, 'nicole@gmail', 108);
    expect(manager.getRole()).toEqual('Manager');
});