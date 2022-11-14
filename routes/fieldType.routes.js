"use strict";

const express = require("express");
const fieldTypeControllers = require("../controllers/fieldType.controller")
const router = express.Router();

router.get("/",fieldTypeControllers.getFieldTypeConfigList);
router.post("/",fieldTypeControllers.createNewField)
module.exports = router;