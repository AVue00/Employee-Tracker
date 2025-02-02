import { pool } from "./connection.js";

export const viewEmployees = async() => {
    // View all employees
    const query = 'SELECT * FROM employee';
    const employees = await pool.query(query);
    console.table(employees.rows);
}

export const addEmployee = async(employee_data: any) => {
    // Add employee
    const { first_name, last_name, role_id } = employee_data;
    const manager_id = employee_data.manager_id === '' ? null : employee_data.manager_id;
    const query = 'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)';
    const values = [first_name, last_name, role_id, manager_id??null];
    await pool.query(query, values);
    console.log('Employee added successfully');
}