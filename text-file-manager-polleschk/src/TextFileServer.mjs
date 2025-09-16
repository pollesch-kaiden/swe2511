/*
 * Class: SWE2511 - Text File Manager
 * Name: Kaiden Pollesch
 * Section: 111
 */

import express from "express";
import fs from "node:fs";
import path from "node:path";

const app = new express();

// Use text middleware to interpret request body as text
app.use(express.text());

// Use static middleware for static front-end hosting
app.use(express.static("public", { index: "TextFileManager.html" }));

// Helper functions for parameter validation
/*
 * Checks if a value is defined
 */
const isDefined = (value) => (
    value !== undefined && value !== null && typeof(value) !== 'undefined'
);

/*
 * Checks if value is defined, is a string, and has a length > 0
 */
const isNonEmptyString = (value) => (
    isDefined(value) && typeof(value) === "string" && value.length > 0
)

// Location to store files
const filesDir = `files`;

/*
 * Function handler for the GET /files API endpoint
 */
app.get("/files", (request, response) => {
    //Retrieves the list of files in the 'filesDir' directory
    try {
        const files = fs.readdirSync(filesDir);
        response.json({ status: "success", files });
    } catch (error) {
        response.json({
            status: "error", message: "Failed to retrieve files"
        });
    }
});

/*
 * Function handler for the GET /file API endpoint
 */
app.get("/file", (request, response) => {
    const fileName = request.query.name;
    //Checks if the file name is valid
    if (!isNonEmptyString(fileName)) {
        return response.json({
            status: "error", message: "File name is required"
        });
    }
    const filePath = path.join(filesDir, fileName);
    // Check if the file exists
    if (!fs.existsSync(filePath)) {
        return response.json({
            status: "error", message: "File not found"
        });
    }
    try {
        //Read the file content
        const data = fs.readFileSync(filePath, "utf-8");
        // Send the file content in the response
        response.json({ status: "success", fileName, data });
    } catch (error) {
        response.json({
            status: "error", message: "Failed to read file"
        });
    }
});

/*
 * Function handler for the POST /file API endpoint
 */
app.post("/file", (request, response) => {
    const fileName = request.query.name;
    //Checks if the file name is valid
    if (!isNonEmptyString(fileName)) {
        return response.json({
            status: "error", message: "File name is required"
        });
    }

    const filePath = path.join(filesDir, fileName);
    // Check if the file exists
    if (fs.existsSync(filePath)) {
        return response.json({
            status: "error", message: "File already exists"
        });
    }
    try {
        //Create a new file with the given name
        fs.writeFileSync(filePath, "");
        //Return success response
        response.json({ status: "success", fileName });
    } catch (error) {
        //Error if file is not create
        response.json({
            status: "error", message: "Failed to create file"
        });
    }
});

/*
 * Function handler for the PUT /file API endpoint
 */
app.put("/file", (request, response) => {
    const fileName = request.query.name;
    //Checks if the file name is valid
    if (!isNonEmptyString(fileName)) {
        return response.json({
            status: "error", message: "File name is required"
        });
    }
    const filePath = path.join(filesDir, fileName);
    // Check if the file exists
    if (!fs.existsSync(filePath)) {
        return response.json({
            status: "error", message: "File not found"
        });
    }
    try {
        //Write the file content
        fs.writeFileSync(filePath, request.body);
        //Return success response with file name and data
        response.json({status: "success", fileName, data: request.body});
    } catch (error) {
        // Error if file is not saved
        response.json({
            status: "error", message: "Failed to save file"
        });
    }
});

/*
 * Function handler for the DELETE /file API endpoint
 */
app.delete("/file", (request, response) => {
    const fileName = request.query.name;
    //Checks if the file name is valid
    if (!isNonEmptyString(fileName)) {
        return response.json({
            status: "error", message: "File name is required"
        });
    }
    const filePath = path.join(filesDir, fileName);
    // Check if the file exists
    if (!fs.existsSync(filePath)) {
        return response.json({
            status: "error", message: "File not found"
        });
    }
    try {
        //Delete the file
        fs.unlinkSync(filePath);
        response.json({ status: "success", fileName });
    } catch (error) {
        //Error if file is not deleted
        response.json({
            status: "error", message: "Failed to delete file"
        });
    }
});

// Set the server to listen on port 3000
app.listen(3000, () => {
    console.log("listening on http://localhost:3000");
});