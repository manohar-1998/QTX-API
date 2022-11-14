"use strict";

const dbUtil = require("../utils/db.util")
const { Op } = require("sequelize");

const {
   validateProjectsData,
} = require("../utils/validation.util");
const { ProjectsData } = require("../models/projects.model");


const createNewProject = async (req, res) => {
  // Validating request body
  try {
    await validateProjectsData(req.body);
  } catch (error) {
    return res.status(400).json({
      'Validation Error Check': error.toString(),
    });
  }

  // Creating new entry
  try {
    await ProjectsData.create(req.body);
    return res.status(200).json({
      'New Entry': req.body
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

const getAllProjectsData = async (req, res) => {
    let queryResult;
    queryResult = await dbUtil.getAllProjects();
    if (queryResult !== null) {
      return res.status(200).json(queryResult)
    }
    else {
      res.status(400).json({
        'Error Message': error.toString(),
      });
    }
};

const getProjectById = async (req,res) => {
    let queryResult = await dbUtil.getProjectsListById(req.params.id);
    if (queryResult !== null) {
        return res.status(200).json({
          respose: queryResult
        })
      }
      else {
       res.status(400).json({
        'Error Message': error.toString(),
        });
      }
}

module.exports = { createNewProject, getAllProjectsData, getProjectById };
