// import { pool } from "./connection";
import inquirer from "inquirer";
import { addEmployee, getArrayRoles, viewEmployees, getArrayManagers, updateEmployeeRole, getEmployees, viewAllRoles, addRole, getDepartments, viewDepartments, addDepartment } from "./db/index.js";


export const init = async () => {
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
            name: 'View all roles',
            value: 'VIEW_ALL_ROLES'
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
            getArrayRoles().then((roles) => {
            getArrayManagers().then((managers) => {
            inquirer.prompt([{
                type: 'input',
                name: 'first_name',
                message: 'Enter employee first name:'
                },
                {
                type: 'input',
                name: 'last_name',
                message: 'Enter employee last name:'
                },
                {
                type: 'list',
                name: 'role_id',
                message: 'Select the role for this employee:',
                choices: roles
                },
                {
                type: 'list',
                name: 'manager_id',
                message: 'Select the manager for this employee:',
                choices: managers
                }])
                .then((employee_data) => {
                    addEmployee(employee_data);
                    })
                })
            })
        }
        if (answer.action === 'UPDATE_EMPLOYEE_ROLE') {
            getEmployees().then((employees) => {
            getArrayRoles().then((roles) => {
            inquirer.prompt([{
                type: 'list',
                name: 'employee_id',
                message: 'Select an employee to update role:',
                choices: employees
            },
            {
                type: 'list',
                name: 'role_id',
                message: 'Select the new role for this employee:',
                choices: roles
            }])
            .then((employee_data) => {
                updateEmployeeRole(employee_data);
                    })
                })
            })
        }
        if (answer.action === 'VIEW_ALL_ROLES') {
            viewAllRoles();
        }
        if (answer.action === 'ADD_ROLE') {
            getDepartments().then((departments) => {
            inquirer.prompt([{
                type: 'input',
                name: 'title',
                message: 'Enter new role name:'
            },
            {
                type: 'input',
                name: 'salary',
                message: 'Enter salary of this new role:'
            },
            {
                type: 'list',
                name: 'department_id',
                message: 'What department does this new role belong to?',
                choices: departments
            }])
            .then((role_data) => {
                addRole(role_data);
                })
            })
        }
        if (answer.action === 'VIEW_DEPARTMENTS') {
            viewDepartments();
        }
        if (answer.action === 'ADD_DEPARTMENT') {
            inquirer.prompt([{
                type: 'input',
                name: 'department_name',
                message: 'Enter new department name:'
            }])
            .then((department_data) => {
                addDepartment(department_data);
            })
        }
    });
}
init();