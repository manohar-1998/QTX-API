"use strict";

const { DataTypes } = require("sequelize");
const { sequelize } = require("../utils/db.util");

const FieldTypeData = sequelize.define(
  "fieldtype_config",
  {
    field_label: {
      field: "field_label",
      type: DataTypes.STRING,
    },
    field_name: {
      field: "field_name",
      type: DataTypes.STRING,
    },
    field_type: {
      field: "field_type",
      type: DataTypes.STRING,
      primaryKey: true
    },
    field_value: {
      field: "field_value",
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "fieldtype_config",
    timestamps: false,
  }
);

module.exports = { FieldTypeData };
