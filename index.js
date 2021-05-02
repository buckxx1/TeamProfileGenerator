const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./library/Manager');
const Engineer = require('./library/Engineer');
const Intern = require('./library/Intern');
const generatePage = require('./src/template');
const {writeFile, copyFile } = require('./util/generate-website');

const teamMembers = [];

const startApp = () => {

    //adding manager
    const addManager = () => {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'managerName',
                messaage: 'What is the group managers name?',
                validate: answerInput => {
                    if (answerInput) {
                        return true;
                    } else {
                        console.log('Please enter the group managers name.');
                        return false;
                    }
                }
            },{
                type:'input',
                name: 'id',
                message: 'What is the Managers ID',
                validate: answerInput => {
                    if (answerInput) {
                        return  true;
                    } else {
                        console.log('Please enter the Manager ID please.');
                        return false;
                    }
                }
            },{
                type: 'input',
                name: 'managerEmail',
                message: 'Please enter the managers email.',
                validate: answerInput => {
                    if (answerInput) {
                        return true;
                    } else {
                        console.log('Please enter the managers email correctly.');
                        return false;
                    }
                }
            },
        ])
            .then(answers => {
                const manager = new Manager(answers.managerName, answers.id, answers.managerEmail);
                //push info to the manager object
                teamMembers.push(manager);
                //generate new team member 
                createNewTeamMember();

            })
    }
    //add engineer 
    const addEngineer = () => {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: 'Enter the engineers name please.',
                validate: answerInput => {
                    if (answerInput) {
                        return true;
                    } else {
                        console.log('Please correctly enter the engineers name.');
                        return false;
                    }
                }
            },{
                type: 'input',
                name: 'id',
                message: 'Enter the engineers ID please.',
                validate: answerInput => {
                    if (answerInput) {
                        return true;
                    } else {
                        console.log('Please correctly enter the engineers ID.');
                        return false;
                    }
                } 
            },{
                type: 'input',
                name: 'engineerEmail',
                message: 'Enter the engineers email please.',
                validate: answerInput => {
                    if (answerInput) {
                        return true;
                    } else {
                        console.log('Please correctly enter the engineers email.');
                        return false;
                    }
                }
            },{
                type: 'input',
                name: 'gitHub',
                message: 'Enter the engineers GitHub please.',
                validate: answerInput => {
                    if (answerInput) {
                        return true;
                    } else {
                        console.log('Please correctly enter the engineers GitHub.');
                        return false;
                    }
                }
            }
        ])
            .then(answers => {
                const engineer = new Engineer(answers.engineerName, answers.id, answers.engineerEmail, answers.gitHub);
                //add info to the engineer object
                teamMembers.push(engineer);
                //generate the engineer 
                createNewTeamMember();
            })
    };
    //time to add the lowly intern jkjk
    const addIntern = () => {
        return inquirer.prompt ([
            {
                type: 'input',
                name: 'internName',
                message: 'Enter the interns name please.',
                validate: answerInput => {
                    if (answerInput) {
                        return true;
                    } else {
                        console.log('Please correctly enter the interns name.');
                        return false;
                    }
                }
            },{
                type: 'input',
                name: 'id',
                message: 'Enter the interns id please.',
                validate: answerInput => {
                    if (answerInput) {
                        return true;
                    } else {
                        console.log('Please correctly enter the interns id.');
                        return false;
                    }
                }
            },{
                type: 'input',
                name: 'internEmail',
                message: 'Enter the interns email please',
                validate: answerInput => {
                    if (answerInput) {
                        return true;
                    } else {
                        console.log('Please correctly enter the interns email.');
                        return false;
                    }
                }
            },{
                type: 'input',
                name: 'school',
                message: 'What school did the intern attend/ or is attending?',
                validate: answerInput => {
                    if (answerInput) {
                        return true;
                    } else {
                        console.log('Please properly enter the school name!');
                        return false;
                    }
                }
            }
        ])
            .then(answers => {
                const intern = new Intern(answers.internName, answers.id, answers.internEmail, answers.school);
                teamMembers.push(intern);
                //generate intern profile
                createNewTeamMember();
            })
    }

    // Add an Engineer or Intern or Finish menu options
    const createNewTeamMember = () => {
        return inquirer.prompt([
            {
                type: 'list',
                name: 'teamMenu',
                message: 'Which type of team member would you like to add?',
                choices: ['Engineer', 'Intern', 'Finish building my team']
            }
        ])
            .then(answers => {
                if (answers.teamMenu === 'Engineer') {
                    addEngineer();
                }
                else if (answers.teamMenu === 'Intern') {
                    addIntern();
                }
                else {
                    const pageHTML = generatePage(teamMembers);
                    writeFile(pageHTML);
                    console.log('File created!');
                    copyFile();
                    console.log('Stylesheet Copied');
                }
            })
    }

    addManager()


}

startApp();