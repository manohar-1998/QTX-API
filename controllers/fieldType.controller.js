"use strict";

const dbUtil = require("../utils/db.util");

const { validateFieldTypeConfigData } = require("../utils/validation.util");
const { FieldTypeData } = require("../models/fieldType.model");

const getFieldTypeConfigList = async(req, res) => {
    let queryResult;
    queryResult = await dbUtil.getFieldTypeConfig();
    if(queryResult !== null){
        return res.status(200).json({
            'response': queryResult
        })
    } else {
        res.status(400).json({
            'Error Occured': error.toString(),
        })
    }
};

const createNewField = async (req, res) => {
    try{
        await validateFieldTypeConfigData(req.body);
    } catch (error){
        return res.status(400).json({
            'Error occured at Validation Check': error.toString(),
        });
    }

    try {
        console.log("Body check=",req.body)
        await FieldTypeData.create(req.body);
        return res.status(200).json({
            'Created Field': req.body
        })
    } catch (error){
        throw error;
        // return res.status(500).json({
        //     'Error': "Internal Server Error"
        // })
    }
}

module.exports = { getFieldTypeConfigList, createNewField }
