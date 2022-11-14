"use strict";

const Joi = require("joi");

const validateRule01Data = async (rule01Data) => {
    const schema = Joi.object({
      id: Joi.number().required(),
      name: Joi.string().required(),
      dob: Joi.date().raw().required(),
      age: Joi.number().required(),
      city: Joi.string().required(),
      gender: Joi.string().required(),
      martial_status: Joi.string().required(),
    });
    try {
      await schema.validateAsync(rule01Data);
    } catch (error) {
      throw error;
    }
  };

const validateProjectsData = async (projectsData) => {
  const schema = Joi.object({
    project_name: Joi.string().required(),
    project_id:Joi.number(),
    status: Joi.string().required()
  });
  try {
    await schema.validateAsync(projectsData)
  } catch (error) {
    throw error;
  }
};

const validateFieldTypeConfigData = async (fieldConfigData) => {
  const schema = Joi.object({
    field_label: Joi.string(),
    field_name: Joi.string(),
    field_type: Joi.string().allow(null,''),
    field_value: Joi.string().allow(null,'')
  });
  try {
    await schema.validateAsync(fieldConfigData)
  } catch (error) {
    throw error
  }
};

const validateEmployeeData = async (employeeData) => {
  const schema = Joi.object({
    company: Joi.string().required(),
    location: Joi.string().required(),
    employee_status: Joi.string().required(),
    role: Joi.string().required(),
    projects: Joi.string().required(),
    current_project: Joi.string().required(),
    employee_name: Joi.string().required(),
    employee_id: Joi.string().required()
  });
  try {
    await schema.validateAsync(employeeData)
  } catch (error) {
    throw error;
  }
}


  module.exports = {
    validateRule01Data,
    validateProjectsData,
    validateEmployeeData,
    validateFieldTypeConfigData
  }