"use strict";

const dbUtil = require("../utils/db.util")

const {
  validateRule01Data,
} = require("../utils/validation.util");
const { Rule01Data } = require("../models/rule01.model");


const createRule01Data = async (req, res) => {
  // Validating request body
  try {
    await validateRule01Data(req.body);
  } catch (error) {
    return res.status(400).json({
      'Validation Error Check': error.toString(),
    });
  }

  // Creating new entry for rule 01
  try {
    await Rule01Data.create(req.body);
    return res.status(200).json({
      'New Entry': req.body
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

const getRule01Data = async (req, res) => {
    let queryResult;
    queryResult = await dbUtil.getAllRule01Data();
    if (queryResult !== null) {
      return res.status(200).json({
        respose: queryResult
      })
    }
    else {
      res.status(400).json({
        message: error.toString(),
      });
    }
}

module.exports = { createRule01Data, getRule01Data };
