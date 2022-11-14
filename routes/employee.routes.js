"use strict";

const express = require("express");
const employeeControllers = require("../controllers/employee.controller")

const router = express.Router();

router.post("/", employeeControllers.createOrUpdateRule03Data);
router.get("/", employeeControllers.getAllEmployeesData);
router.get("/:id",employeeControllers.getEmployeeById);
router.get("/project/:project_id",employeeControllers.getEmpDataUsingProjectId);

module.exports = router;
