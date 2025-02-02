// import { pool } from "./connection";
import inquirer from "inquirer";
import { addEmployee, viewEmployees } from "./db/index.js";

const init = async () => {
    console.log('Hello');
    inquirer.prompt([{
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: [{
            name: 'View all employees',
            value: 'VIEW_EMPLOYEES'
        },
        {
            name: 'Add employee',
            value: 'ADD_EMPLOYEE'
        },
        {
            name: 'Update employee role',
            value: 'UPDATE_EMPLOYEE_ROLE'
        },
        {
            name: 'Add role',
            value: 'ADD_ROLE'
        },
        {
            name: 'View all departments',
            value: 'VIEW_DEPARTMENTS'
        },
        {
            name: 'Add department',
            value: 'ADD_DEPARTMENT'
        },
        {
            name: 'Quit',
            value: 'QUIT'
        }
    ]
        }])
    .then((answer) => {
        if (answer.action === 'VIEW_EMPLOYEES') {
            viewEmployees();
        }
        if (answer.action === 'ADD_EMPLOYEE') {
            inquirer.prompt([{
                type: 'input',
                name: 'first_name',
                message: 'Enter employee first name'
                },
                {
                type: 'input',
                name: 'last_name',
                message: 'Enter employee last name'
                },
                {
                type: 'input',
                name: 'role_id',
                message: 'Enter the role id for this employee'
                },
                {
                type: 'input',
                name: 'manager_id',
                message: 'Enter the manager id for this employee'
                }]).then((employee_data) => {
                    addEmployee(employee_data);
                })
        }
    });
}
init();