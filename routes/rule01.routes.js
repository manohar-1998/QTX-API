"use strict";

const express = require("express");
const rule01Controllers = require("../controllers/rule01.controllers");

const router = express.Router();

router.post("/", rule01Controllers.createRule01Data);
router.get("/", rule01Controllers.getRule01Data);

module.exports = router;
