"use strict";

const { DataTypes } = require("sequelize");
const { sequelize } = require("../utils/db.util");
const { ProjectsData } = require("./projects.model");

const EmployeeData = sequelize.define(
  "emp_table",
  {
    company: {
      field: "company",
      type: DataTypes.STRING,
    },
    location: {
      field: "location",
      type: DataTypes.STRING,
    },
    employee_status: {
      field: "employee_status",
      type: DataTypes.STRING,
    },
    role: {
        field: "role",
        type: DataTypes.STRING,
    },
    projects: {
        field: 'projects',
        type: DataTypes.STRING,
        allowNull:false
    },
    current_project: {
        field: 'current_project',
        type: DataTypes.STRING
    },
    employee_name: {
        field: 'employee_name',
        type: DataTypes.STRING,
    },
    employee_id: {
        field: 'employee_id',
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },
    // project_id: {
    //   type: DataTypes.INTEGER,
    //   allowNull:false,
      // references: {
      //   model: {
      //     model:ProjectsData,
      //     key: 'project_id'
      //   },
      // }
    // }
  },
  {
    tableName: "emp_table",
    timestamps: false,
  }
);
// ProjectsData.hasOne(EmployeeData);
module.exports = { EmployeeData };
