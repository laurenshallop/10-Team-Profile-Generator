const Intern = require('../lib/Intern');

test('create an intern object', () => {
    const intern = new Intern('Bella', 309, 'bella@gmail.com', 'SJ State');
    expect(intern.school).toEqual('SJ State');
});

test('get school', () => {
    const intern = new Intern('Bella', 309, 'bella@gmail.com', 'SJ State');
    expect(intern.getSchool()).toEqual('SJ State');
});

test('gets role of employee', () => {
    const intern = new Intern('Bella', 309, 'bella@gmail', 'SJ State');
    expect(intern.getRole()).toEqual('Intern');
});