"use strict";

const dbUtil = require("../utils/db.util");
const { Op } = require("sequelize");

const { validateEmployeeData } = require("../utils/validation.util");
const { EmployeeData } = require("../models/employee.model");

const createOrUpdateRule03Data = async (req, res) => {
  const requestBody = req.body;
  try {
    await validateEmployeeData(req.body);
  } catch (error) {
    return res.status(400).json({
      "Validation Error Check": error.toString(),
    });
  }
  // Checking for Employee using his ID whether he exists in DB or not
  try {
    const existingEmpData = await EmployeeData.findByPk(
      requestBody.employee_id
    );
      //  Creation of New Data of Employee
    if (existingEmpData === null) {
      // TODO Assing Project ID from req Data to project_d

      const data = await EmployeeData.create(req.body);
      return res.status(200).json({
        "New Employee Added": req.body,
      });
    } 
    //  Updating existing Employee Data
    else {
      const data = await EmployeeData.update({
        company: requestBody.company,
        location: requestBody.location,
        employee_status: requestBody.employee_status,
        role: requestBody.role,
        projects: requestBody.projects,
        current_project: requestBody.current_project,
        employee_name: requestBody.employee_name,
        employee_id: requestBody.employee_id,
        // project_id: requestBody.project_id
      },
      {
        where: {
          employee_id: requestBody.employee_id,
        },
      });
      return res.status(200).json({
        message:`Employee Details Updated Successfully for ID = ${requestBody.employee_id}`,
        data:requestBody,
      });
    }
  } catch (error) {
    // throw error;
    return res.status(500).json({
      message: `Employee Data Updation Failed`,
      data:[]
    })
  }
};

const getAllEmployeesData = async (req, res) => {
  let queryResult;
  queryResult = await dbUtil.getAllEmployeesData();
  if (queryResult !== null) {
    return res.status(200).json({
      response: queryResult,
    });
  } else {
    res.status(400).json({
      "Error Message": error.toString(),
    });
  }
};

const getEmployeeById = async (req, res) => {
  let queryResult = await dbUtil.getEmployeeListById(req.params.id);
  if (queryResult !== null) {
    return res.status(200).json({
      respose: queryResult,
    });
  } else {
    res.status(400).json({
      "Error Message": error.toString(),
    });
  }
};

const getEmpDataUsingProjectId = async (req, res) => {
  console.log("req.params.project_id = ", req.params.project_id);
  let queryString = await dbUtil.getEmpDataWithProjectId(req.params.project_id);
  if (queryString !== null) {
    return res.status(200).json({
      result: queryString,
    });
  } else {
    res.status(400).json({
      "Error Occured": error.toString(),
    });
  }
};

module.exports = {
  createOrUpdateRule03Data,
  getAllEmployeesData,
  getEmployeeById,
  getEmpDataUsingProjectId,
};
