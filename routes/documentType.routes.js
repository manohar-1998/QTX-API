"use strict";

const express = require("express");
const documentTypeControllers = require("../controllers/documentType.controller");

const router = express.Router();

router.post("/", documentTypeControllers.createOrUpdateDocumentTypeData);
router.get("/:id", documentTypeControllers);

module.exports = router;
