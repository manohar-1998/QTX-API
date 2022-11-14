"use strict";

const { DataTypes } = require("sequelize");
const { sequelize } = require("../utils/db.util");

const Rule01Data = sequelize.define(
  "rule01",
  {
    id: {
      field: "id",
      type: DataTypes.NUMBER,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      field: "name",
      type: DataTypes.STRING,
    },
    dob: {
      field: "dob",
      type: DataTypes.DATE,
    },
    age: {
      field: "age",
      type: DataTypes.NUMBER,
    },
    city: {
      field: "city",
      type: DataTypes.STRING,
    },
    gender: {
      field: "gender",
      type: DataTypes.STRING,
    },
    martial_status: {
      field: "martial_status",
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "rule01",
    timestamps: false,
  }
);

module.exports = { Rule01Data };
