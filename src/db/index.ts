import { init } from "../index.js";
import { pool } from "./connection.js";

export const viewEmployees = async() => {
    // View all employees
    const query = 'SELECT * FROM employee';
    const employees = await pool.query(query);
    console.table(employees.rows);
    init();
}

export const addEmployee = async(employee_data: any) => {
    // Add employee
    const { first_name, last_name, role_id } = employee_data;

    let manager_id;
    if (employee_data.manager_id === '') {
        manager_id = null;
    } else {
        manager_id = employee_data.manager_id;
    }

    const query = 'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)';
    const values = [first_name, last_name, role_id, manager_id??null];
    await pool.query(query, values);
    console.log('New employee added to database');
    init();
}

export const addDepartment = async(department_data: any) => {
    // Add department
    const { department_name } = department_data;
    const query = 'INSERT INTO department (department_name) VALUES ($1)';
    const values = [department_name];
    await pool.query(query, values);
    console.log('New department added to database');
    init();
}

export const updateEmployeeRole = async(employee_data: any) => {
    // Update employee role
    const { employee_id, role_id } = employee_data;
    const query = 'UPDATE employee SET role_id = $1 WHERE id = $2';
    const values = [role_id, employee_id];
    await pool.query(query, values);
    console.log('Employee role updated successfully');
    init();
}

export const getArrayRoles = async() => {
    // View all roles
    const query = 'SELECT * FROM role';
    const roles = await pool.query(query);
    return(roles.rows.map(({ id, title }) => ({ name: title, value: id })));
}

export const getArrayManagers = async() => {
    // View all managers
    const query = 'SELECT * FROM employee WHERE manager_id IS NULL';
    const managers = await pool.query(query);
    const managersArray = managers.rows.map(({ id, first_name, last_name }) => ({ name: `${first_name} ${last_name}`, value: id }));
    managersArray.push({ name: 'None', value: null });
    return managersArray;
}

export const getEmployees = async() => {
    // View all employees
    const query = 'SELECT * FROM employee';
    const employees = await pool.query(query);
    const employeesArray = employees.rows.map(({ id, first_name, last_name }) => ({ name: `${first_name} ${last_name}`, value: id }));
    employeesArray.push({ name: 'None', value: null });
    return employeesArray;
}

export const viewAllRoles = async() => {
    // View all roles
    const query = 'SELECT * FROM role';
    const roles = await pool.query(query);
    console.table(roles.rows);
    init();
}

export const addRole = async(role_data: any) => {
    // Add role
    const { title, salary, department_id } = role_data;
    const query = 'INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)';
    const values = [title, salary, department_id];
    await pool.query(query, values);
    console.log('New role added to database');
    init();
}

export const getDepartments = async() => {
    // View all departments
    const query = 'SELECT * FROM department';
    const departments = await pool.query(query);
    return(departments.rows.map(({ id, department_name }) => ({ name: department_name, value: id })));
}

export const viewDepartments = async() => {
    // View all departments
    const query = 'SELECT * FROM department';
    const departments = await pool.query(query);
    console.table(departments.rows);
    init();
}
