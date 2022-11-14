"use strict";

const util = require("util");

const mysql = require("mysql");
const dotenv = require("dotenv");
const { Sequelize } = require("sequelize");
const _ = require("underscore");
const { result, values } = require("underscore");

dotenv.config();

// Connection using sequelize
const sequelize = new Sequelize(
  process.env.DB_DATABASE_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOSTNAME,
    dialect: "mysql",
    ssl: true,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 3000,
      idle: 10000,
    },
  }
);

const connectionPool = mysql.createPool({
  host: process.env.DB_HOSTNAME,
  port: process.env.DB_PORT,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  ssl: true,
});

// Using node native promisify to use async/await
const query = util.promisify(connectionPool.query).bind(connectionPool);

const testDatabaseConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected");
  } catch (error) {
    console.error("Unable to connect to the database : ", error);
    process.exit(1);
  }
};

const getAllRule01Data = async () => {
  let queryString = `select * from rule01`;

  try {
    let result = await query(queryString);
    return result;
  } catch (error) {
    throw error;
  }
};

const getAllProjects = async () => {
  let queryString = `select * from projects_table `;

  try {
    let result = await query(queryString);
    return result;
  } catch (error) {
    throw error;
  }
};

const getProjectsListById = async (id) => {
  let queryString = `select * from projects_table where project_id = ${id}`;
  try {
    let result = await query(queryString);
    return result;
  } catch (error) {
    throw error;
  }
};

const getEmpDataWithProjectId = async (project_id) => {
  let queryString = `select e.employee_name,e.employee_id,e.role, p.project_name, p.project_head from emp_table e inner join projects_table p on e.project_id = p.project_id where p.project_id = ${project_id}`;
  try {
    let result = await query(queryString);
    return result;
  } catch (error) {
    throw error;
  }
};

const getAllEmployeesData = async () => {
  let queryString = `select * from emp_table`;

  try {
    let result = await query(queryString);
    return result;
  } catch (error) {
    throw error;
  }
};

const getEmployeeListById = async (emp_id) => {
  let queryString = `select * from emp_table where employee_id = ${emp_id}`;

  try {
    let result = await query(queryString);
    return result;
  } catch (error) {
    throw error;
  }
};

const getFieldTypeConfig = async () => {
  let queryString = "select * from fieldtype_config";

  try {
    let result = await query(queryString);
    return result;
  } catch (error) {
    throw error;
  }
};

const createOrUpdateEmployeeData = async (empData) => {
  if (empData.company !== "" || empData.company !== null) {
    empData.company = `'${empData.company}'`;
  }
  if (empData.location !== "" || empData.location !== null) {
    empData.location = `'${empData.location}'`;
  }
  if (empData.employee_status !== "" || empData.employee_status !== null) {
    empData.employee_status = `'${empData.employee_status}'`;
  }
  if (empData.role !== "" || empData.role !== null) {
    empData.role = `'${empData.role}'`;
  }
  if (empData.projects !== "" || empData.projects !== null) {
    empData.projects = `'${empData.projects}'`;
  }
  if (empData.current_project !== "" || empData.current_project !== null) {
    empData.current_project = `'${empData.current_project}'`;
  }
  if (empData.employee_name !== "" || empData.employee_name !== null) {
    empData.employee_name = `'${empData.employee_name}'`;
  }
  if (empData.employee_id !== "" || empData.employee_id !== null) {
    empData.employee_id = `'${empData.employee_id}'`;
  }
  if (empData.project_id !== "" || empData.project_id !== null) {
    empData.project_id = `'${empData.project_id}'`;
  }

  let queryString = `insert into emp_table(company, location, employee_status, role, projects, current_project, employee_name, employee_id, projects_id)
                       values(${empData.company}, ${empData.location},${empData.employee_status}, ${empData.role},  ${empData.projects}, ${empData.current_project}, ${empData.employee_name}, ${empData.employee_id}, ${empData.project_id})
                       on duplicate key update
                    company = ${empData.company},
                    location = ${empData.location},
                    employee_status = ${empData.employee_status},
                    role = ${empData.role},
                    projects = ${empData.projects},
                    current_project = ${empData.current_project},
                    employee_name = ${empData.employee_name},
                    employee_id = ${empData.employee_id},
                    project_id = ${empData.project_id}
                       `;
  try {
    const results = await query(queryString);
    return results;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  sequelize,
  testDatabaseConnection,
  getAllRule01Data,
  getAllEmployeesData,
  createOrUpdateEmployeeData,
  getEmployeeListById,
  getEmpDataWithProjectId,
  getAllProjects,
  getProjectsListById,
  getFieldTypeConfig,
};
