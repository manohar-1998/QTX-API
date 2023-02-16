"use strict";

const dbUtil = require("../utils/db.util");

const { DocumentTypeData } = require("../models/documentType.model");
const { validateDocumentTypeData } = require("../utils/validation.util");

const createOrUpdateDocumentTypeData = async (req, res) => {
    const requestBody = req.body;
    console.log("Request Body =",req.body)
    try {
        await validateDocumentTypeData(req.body);
    } catch (error) {
        return res.status(400).json({
            "Validation Error": error.toString(),
        });
    }

    try {
        const existingDocument = await DocumentTypeData.findByPk(
            requestBody.document_id
        );
        console.log("Existing DOcument =",existingDocument)
        if (existingDocument === null) {
            console.log("Inside Creation Method",existingDocument)
            const data = await DocumentTypeData.create(req.body);
            return res.status(200).json({
                "Document Labels Noted Successfully": req.body,
            })
        }
        else {
            const data = await DocumentTypeData.update({
                documentname: requestBody.documentname,
                document_id: requestBody.document_id,
                aadhar_username: requestBody.aadhar_username,
                aadhar_dob: requestBody.aadhar_dob,
                aadhar_gender: requestBody.aadhar_gender,
                aadhar_address: requestBody.aadhar_address,
                aadhar_number: requestBody.aadhar_number,
                pancard_username: requestBody.pancard_username,
                pancard_dob: requestBody.pancard_dob,
                pancard_number: requestBody.pancard_number,
                passport_username: requestBody.passport_username,
                passport_dob: requestBody.passport_dob,
                passport_number: requestBody.passport_number
            },
                {
                    where: {
                        document_id: requestBody.document_id
                    }
                });
            return res.status(200).json({
                message: `Existing Document Updated Successfull`,
                data: requestBody,
            });
        }
    } catch (error) {
        return res.status(500).json({
            message: `Document Updation Failed`,
            data: []
        })
    }
}

const getDocDetailsById = async(req,res) => {
    let queryResult = await dbUtil.getDocumentDetailsListById(req.params.id);
    if(queryResult !== null){
        return res.status(200).json({
            response: queryResult
        });
    } else {
        return res.status(400).json({
            message: `Error while fetching Document details`
        })
    }
}

module.exports = {
    createOrUpdateDocumentTypeData,
    getDocDetailsById
}