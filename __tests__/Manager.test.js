const Manager = require('../lib/Manager');

test('create a manager object', () => {
    const manager = new Manager('Nicole', 108, 'nicole@gmail.com', 08);
    expect(manager.officeNumber).toEqual(08);
});

test('gets role', () => {
    const manager = new Manager('Nicole', 108, 'nicole@gmail', 08);
    expect(manager.role).toEqual('Manager');
});