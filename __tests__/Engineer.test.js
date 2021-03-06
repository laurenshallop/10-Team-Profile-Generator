const Engineer = require('../lib/Engineer');

test('create an engineer object', () => {
    const engineer = new Engineer('Lauren', 526, 'lo@gmail.com', 'logithub');
    expect(engineer.getRole()).toEqual('Engineer');
});

test('gets engineer github', () => {
    const engineer = new Engineer('Lauren', 526, 'lo@gmail', 'logithub');
    expect(engineer.github).toEqual('logithub');
});