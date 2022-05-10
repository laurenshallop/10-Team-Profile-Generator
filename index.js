// runs the application

const generateHTML = require('./src/generateHTML');
const inquirer = require('inquirer');
const fs = require('fs');

//const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

let teamArray = [];

const addManager = () => {
    return inquirer.prompt([
        {
            type: 'input', 
            name:'name', 
            Message: 'Managers Name',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Enter the managers name');
                    return false;
                }
            }
        },
        {
            type: 'input', 
            name:'id', 
            Message: 'Managers ID ',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Enter the managers ID');
                }
        }
    },
    {     type: 'input', 
          name: 'email', 
          Message: 'Managers email',
          validate: emailAddressInput => {
            if (emailAddressInput) {
                return true;
            } else {
                console.log('Enter the managers email address');
            }
    }
},
{ 
          type: 'input', 
          name:'officeNum', 
          Message: 'Managers office number',
          validate: officeNumInput => {
            if (officeNumInput) {
                return true;
            } else {
                console.log('Enter the managers office number');
            }
    }
},
    ]).then(managerInput => {
        const {name, id, email, officeNum} = managerInput;
        const manager = new Manager(name, id, email, officeNum);

        teamArray.push(manager);
        console.log(teamArray);
        addTeamMember();

    })
};
     const addTeamMember = () => {
            return inquirer.prompt([
                {
                    type: 'list',
                    name: 'addTeamMember',
                    message: 'Option to add or finish building team',
                    choices: ['Add Engineer',
                              'Add Intern',
                              'Finish Building My Team'
                ]
            }
        ]).then(function(data) {
            switch (data.addTeamMember) {
                case 'Add Engineer':
                    addEngineer();
                    break;

                case 'Add Intern':
                    addIntern();
                    break;

                case 'Finish Building My Team':
                    createTeam(teamArray);
                    break;

            }
        });
    };

const addEngineer = () => {
    inquirer.prompt([
        {
            type: 'input',
            name:  'engineerName',
            message:  'Engineer Name',
            validate: engineerNameInput => {
                if (engineerNameInput) {
                    return true;
                } else {
                    console.log('Enter engineers name')
                }
            }
        },
        { 
            type: 'input',
            name: 'id',
            message: 'Enter employee ID',
            validate: employeeIdInput => {
                if (employeeIdInput) {
                    return true;
                } else {
                    console.log('Enter employee ID');
                }
            }
        },
        { 
            type: 'input',
            name:'email',
            message: 'Enter engineer email',
            validate: emailAddressInput => {
                if (emailAddressInput) {
                    return true;
                } else {
                    console.log('Enter engineer email');
                }
            }
        },
        { 
            type: 'input',
            name: 'github',
            message: 'Enter GitHub username',
            validate: githubUsernameInput => {
                if (githubUsernameInput) {
                    return true;
                } else {
                    console.log('Enter GitHub username');
                }
            }
        }
    ]).then(function (engineerInput) {
        const {engineerName, id, email, github } = engineerInput;
        const engineer = new Engineer(engineerName, id, email, github);

        teamArray.push(engineer);
        console.log('teamArray');
        addTeamMember();
    });
};

const addIntern = () => {
    inquirer.prompt([
        { 
            type: 'input',
            name: 'internName',
            message: 'Enter Intern name',
            validate: internNameInput => {
                if (internNameInput) {
                    return true;
                } else {
                    console.log('Enter Intern name');
                }
            }
        },
        { 
            type: 'input',
            name: 'id',
            message: 'Enter intern id',
            validate: employeeIdInput => {
                if (employeeIdInput) {
                    return true;
                } else {
                    console.log('Enter intern employee ID');
                }
            }
        },
        { 
            type: 'input',
            name: 'email',
            message: 'Enter email address',
            validate: emailAddressInput => {
                if (emailAddressInput) {
                    return true;
                } else {
                    console.log('Enter email address');
                }
            }
        },
        { 
            type: 'input',
            name: 'school',
            message: 'Enter intern school',
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log('Enter interns school');
                }
            }
        }
    ]).then(function (internInput) {
        const { internName, id, email, school } = internInput;
        const intern = new Intern(internName, id, email, school);

        teamArray.push(intern);
        console.log(teamArray);
        addTeamMember();
    });
};

const writeFile = (filename, data) => {
    fs.writeFile(filename, data, (err) => {
        if (err) 
        throw (err);
    });
};

const createTeam = (teamArray) => {
    writeFile('./dist/index.html', generateHTML(teamArray));
    console.log(`Your team profile has been created`);
    };
  //});
//}
  addManager();

  //addEngineer();
  //addIntern();
  

