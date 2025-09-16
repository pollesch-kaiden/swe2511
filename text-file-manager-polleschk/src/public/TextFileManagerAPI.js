/*
 * Class: SWE2511 - Text File Manager
 * Name: Kaiden Pollesch
 * Section: 111
 *
 * Text File Manager API Functions
 */

// Helper variables for server endpoints
const server = 'localhost';
const getFilesURL = `http://${server}:3000/files`;
const getFileURL = `http://${server}:3000/file`;
const createFileURL = `http://${server}:3000/file`;
const updateFileURL = `http://${server}:3000/file`;
const deleteFileURL = `http://${server}:3000/file`;

/*
 * getFiles - Calls GET endpoint to retrieve current items
 *
 * Return an array containing the string names of each file
 * Throws an Error containing the error message on error
 */
const getFiles = async() => {
    //Send GET request to server
    const response = await fetch(getFilesURL);
    //Check if response is not OK
    if (!response.ok) {
        throw new Error(`Failed to get files: ${response.status}`);
    }
    const data = await response.json();
    //Check if server returned an error
    if (data.status === "error") {
        throw new Error(`Failed to get files: ${data.message}`);
    }
    //Return list of files from the server
    return data.files;
};

/*
 * getFileData - Calls GET endpoint to retrieve the contents of the file
 *
 * Returns the file data stored by the server for the file
 * Throws an Error containing the error message on error
 */
const getFileData = async(fileName) => {
    //Send GET request to server
    const response = await fetch(`${getFileURL}?name=${encodeURIComponent(fileName)}`);
    // Check if response is not OK
    if (!response.ok) {
        throw new Error(`Failed to get file data: ${response.status}`);
    }
    const data = await response.json();
    // Check if server returned an error
    if (data.status === "error") {
        throw new Error(`Failed to get file data: ${data.message}`);
    }
    // Return file data from the server
    return data.data;
}

/*
 * createNewFile - Calls POST endpoint to create a new file
 *
 * Returns the string name of the created file
 * Throws an Error containing the error message on error
 */
const createNewFile = async(fileName) => {
    //Send POST request to server
    const response = await fetch(`${createFileURL}?name=${encodeURIComponent(fileName)}`, {
        method: 'POST'
    });
    // Check if response is not OK
    if (!response.ok) {
        throw new Error(`Failed to create file: ${response.status}`);
    }
    const data = await response.json();
    // Check if server returned an error
    if (data.status === "error") {
        throw new Error(`Failed to create file: ${data.message}`);
    }
    // Return the name of the created file
    return data.name;
}

/*
 * saveFileData - Calls PUT endpoint to save a file
 *
 * Returns the saved file data
 * Throws an Error containing the error message on error
 */
const saveFileData = async(fileName, fileData) => {
    //Send PUT request to server
    const response = await fetch(`${updateFileURL}?name=${encodeURIComponent(fileName)}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'text/plain'
        },
        body: fileData
    });
    // Check if response is not OK
    if (!response.ok) {
        throw new Error(`Failed to save file data 1: ${response.status}`);
    }
    const data = await response.json();
    // Check if server returned an error
    if (data.status === "error") {
        throw new Error(`Failed to save file data 2: ${data.message}`);
    }
    // Return the saved file data
    return data.data;
}

/*
 * deleteFileData - Calls DELETE endpoint to delete a file
 *
 * Returns nothing
 * Throws an Error containing the error message on error
 */
const deleteFileData = async(fileName) => {
    //Send DELETE request to server
    const response = await fetch(`${deleteFileURL}?name=${encodeURIComponent(fileName)}`, {
        method: 'DELETE'
    });
    // Check if response is not OK
    if (!response.ok) {
        throw new Error(`Failed to delete file: ${response.status}`);
    }
    const data = await response.json();
    // Check if server returned an error
    if (data.status === "error") {
        throw new Error(`Failed to delete file: ${data.message}`);
    }
};