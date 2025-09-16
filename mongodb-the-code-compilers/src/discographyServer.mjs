/*
 * SWE2511 - MongoDB
 * Name: Kaiden Pollesch, Matthew Schulz
 * SECTION: 111
 */

import express from 'express';
import mongoose from 'mongoose';

const app = express();
app.listen(3000, () => {
    console.log("Server is running at http://localhost:3000");
});
app.use(express.static("public", {index: "discography.html"}));
app.use(express.json());

// Connect to the MongoDB
try {
    await mongoose.connect('mongodb://127.0.0.1/discography');
} catch(error) {
    console.log(`Unable to connect to mongodb: ${error}`);
    process.exit();
}
const discographySchema = new mongoose.Schema({'title': String, 'artist': String, 'year': Number});
const discographyModel = mongoose.model('albums', discographySchema);

app.get("/all", (req, res) => {
    discographyModel.find({})
        .then((albums) => {
            res.json({
                status: "success",
                result: albums,
            });
        })
        .catch((error) => {
            res.json({
                status: "error",
                message: error.message,
            });
        })
});

app.get("/artist", (req, res) => {
    discographyModel.find({'artist': `${req.query.artist}`})
        .then((artists) => {
            res.json({
                status: "success",
                result: artists,
            });
        })
        .catch((error) => {
            res.json({
                status: "error",
                message: error.message,
            });
        });
});


app.get("/title", (req, res) => {
    discographyModel.find({'title': `${req.query.title}`})
        .then((titles) => {
            res.json({
                status: "success",
                result: titles,
            });
        })
        .catch((error) => {
            res.json({
                status: "error",
                message: error.message,
            });
        });
});


app.get("/year", (req, res) => {
    discographyModel.find({'year': `${req.query.year}`})
        .then((years) => {
            res.json({
                status: "success",
                result: years,
            });
        })
        .catch((error) => {
            res.json({
                status: "error",
                message: error.message,
            });
        });
});

app.post("/add", (req, res) => {
    if (req.body.title === undefined || req.body.artist === undefined || req.body.year === undefined) {
        res.status(400).json({
            status: "error",
            message: "All fields must be present",
        });
    } else if (req.body.title.length === 0 || req.body.artist.length === 0 || req.body.year.length === 0) {
        res.status(400).json({
            status: "error",
            message: "All fields must be filled out",
        });
    } else {
        const year = req.body.year;
        if (isNaN(year) || year < 1900) {
            res.json({
                status: "error",
                message: "Invalid year",
            });
        } else {
            const newAlbum = new discographyModel({
                title: req.body.title,
                artist: req.body.artist,
                year: req.body.year,
            });

            newAlbum.save()
                .then((savedAlbum) => {
                    res.json({
                        status: "success",
                        result: savedAlbum,
                    });
                })
                .catch((error) => {
                    res.json({
                        status: "error",
                        message: error.message,
                    });
                });
        }
    }
});
