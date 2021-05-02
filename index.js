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
                
            }
        ])
    }
}