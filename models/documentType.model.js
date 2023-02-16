"use strict";

const { DataTypes } = require("sequelize");
const { sequelize } = require("../utils/db.util");

const DocumentTypeData = sequelize.define(
  "documentTable",
  {
    documentname: {
      field: "documentname",
      type: DataTypes.BOOLEAN,
    },
    document_id: {
        field: "document_id",
        type: DataTypes.STRING,
        primaryKey: true,
    },
    aadhar_username: {
      field: "aadhar_username",
      type: DataTypes.BOOLEAN,
    },
    aadhar_dob: {
      field: "aadhar_dob",
      type: DataTypes.BOOLEAN,
    },
    aadhar_gender: {
        field: "aadhar_gender",
        type: DataTypes.BOOLEAN,
    },
    aadhar_address: {
        field: 'aadhar_address',
        type: DataTypes.BOOLEAN
    },
    aadhar_number: {
        field: 'aadhar_number',
        type: DataTypes.BOOLEAN
    },
    pancard_username: {
        field: 'pancard_username',
        type: DataTypes.BOOLEAN,
    },
    pancard_dob: {
        field: 'pancard_dob',
        type: DataTypes.BOOLEAN,
    },
    pancard_number: {
        field: 'pancard_number',
        type: DataTypes.BOOLEAN,
    },
    passport_username: {
        field: 'passport_username',
        type: DataTypes.BOOLEAN,
    },
    passport_dob: {
        field: 'passport_dob',
        type: DataTypes.BOOLEAN,
    },
    passport_number: {
        field: 'passport_number',
        type: DataTypes.BOOLEAN,
    },
  },
  {
    tableName: "documentTable",
    timestamps: false,
  }
);

module.exports = { DocumentTypeData };
