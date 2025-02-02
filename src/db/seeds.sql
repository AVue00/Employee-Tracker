INSERT INTO department (department_name)
VALUES  ('Engineering'),
        ('Finance'),
        ('Legal'),
        ('Sales');

INSERT INTO role (title, salary, department_id)
VALUES  ('Salesperson', 100000, 4),
        ('Sales Lead', 150000, 4),
        ('Lead Engineer', 150000, 1),
        ('Software Engineer', 120000, 1),
        ('Account Manager', 150000, 2),
        ('Accountant', 125000, 2),
        ('Legal Team Lead', 250000, 3),
        ('Lawyer', 190000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ('John', 'Doe', 1, NULL),
        ('Mike', 'Chan', 2, 1),
        ('Ashley', 'Rodriguez', 3, NULL),
        ('Sarah', 'Lourd', 4, 3),
        ('Tom', 'Hardy', 5, NULL),
        ('Jane', 'Doe', 6, 5),
        ('Chris', 'Hemsworth', 7, NULL),
        ('Scarlett', 'Johansson', 8, 7);