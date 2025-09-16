/*
 * Class: SWE2511 - Blogger
 * Name: Kaiden Pollesch
 * Section: 111
 *
 * Blog Server
 */

import express from 'express';
import mongoose from 'mongoose';


/*** Helper functions for parameter validation ***/
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
);

/*
 * Checks if value is string that contains only letters and numbers
 */
const isAlphaNumeric = (text) => {
    const alphanumeric = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
    return text
        .split('')                                                  // Split the text into characters
        .map((char) => { return alphanumeric.indexOf(char) >= 0; }) // Search for the character in the valid characters
        .every((element) => { return element === true; })   // Every character must be found
};

/*
 * Checks if value is string that starts with a letter
 */
const startsWithLetter = (text) => {
    const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
    return letters.indexOf(text[0]) >= 0;
};


// Setup mongodb connection
// ****** NOTE THIS WILL FAIL IF mongod.exe IS NOT RUNNING ******
try {
    await mongoose.connect('mongodb://127.0.0.1:27017/blog');
} catch (error) {
    console.log(`Unable to connect to mongodb: ${error}`);
    process.exit();
}

// Set up a schema to describe the format/structure of the records
//Define the scheme for the blog posts
const blogPostSchema = new mongoose.Schema({
    post: { type: String, required: true },
    hashtag: { type: String, validate: {
        validator: function (v) {
            return !v || (v.startsWith('#') && isAlphaNumeric(v.slice(1)) && startsWithLetter(v.slice(1)));
        },
        message: props => `${props.value} is not a valid hashtag!`
    }},
    creation_date: {type: Date, default: Date.now}
});

// Set up a model to bind a collection to the schema.
const BlogPost = mongoose.model('Post', blogPostSchema);

/*** EXPRESS INITIALIZATION ***/
const app = new express();

// Use JSON Middleware to interpret request body as JSON
app.use(express.json());

// Use static middleware for static front-end hosting
app.use(express.static("public", { index: "blogger.html" }));

//GET /posts endpoint
app.get('/posts', async (req, res) => {
    try {
        const posts = await BlogPost.find({}).sort({ creation_date: -1 });
        res.json({ status: 'success', posts});
    } catch (error) {
        res.status(500).json({ status: 'error', message: error.message });
    }
});

//POST /post endpoint
app.post('/post', async (req, res) => {
    const { post, hashtag } = req.body;
    if (!isNonEmptyString(post)) {
        return res.status(400).json({ status: 'error', message: 'Post is required and must be a non-empty string.' });
    }
    try {
        const newPost = new BlogPost({
            post: post.trim(),
            hashtag: hashtag.trim(),
        });
        await newPost.save();
        res.json({ status: 'success', post: newPost });
    } catch (error) {
        res.status(500).json({ status: 'error', message: error.message });
    }
});

//DELETE /post endpoint
app.delete('/post/:id', async (req, res) => {
    try {
        await BlogPost.findByIdAndDelete(req.params.id);

        res.json({ status: 'success', post: deletedPost });
    } catch (error) {
        res.status(500).json({ status: 'error', message: error.message });
    }
});



/*** ADDITIONAL FUNCTIONS FOR API END-POINTS ***/

app.listen(3000, () => {
    console.log("listening on http://localhost:3000");
});