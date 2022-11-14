"use strict";

const express = require("express");
const projectsControllers = require("../controllers/projects.controller")

const router = express.Router();

router.post("/", projectsControllers.createNewProject);
router.get("/", projectsControllers.getAllProjectsData);
router.get("/:id",projectsControllers.getProjectById)

module.exports = router;
