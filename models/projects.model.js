"use strict";

const { DataTypes } = require("sequelize");
const { sequelize } = require("../utils/db.util");

const ProjectsData = sequelize.define(
  "projects_table",
  {
    project_id: {
      field: "project_id",
      type: DataTypes.NUMBER,
      allowNull: false,
      primaryKey: true,
    },
    project_name: {
      field: "project_name",
      type: DataTypes.STRING,
    },
    status: {
      field: "status",
      type: DataTypes.STRING,
    }
  },
  {
    tableName: "projects_table",
    timestamps: false,
  }
);

module.exports = { ProjectsData };
