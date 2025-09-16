/*
 * Class: SWE2511 - Blogger
 * Name: Kaiden Pollesch
 * Section: 111
 *
 * Blogger API Functions
 */

const server = 'localhost';
const getPostsURL = `http://${server}:3000/posts`;
const createPostURL = `http://${server}:3000/post`;
const deletePostURL = `http://${server}:3000/post`;

/*
 * getPosts - Calls GET endpoint to retrieve blog posts
 */
const getPosts = async () => {
    try {
        const response = await fetch(getPostsURL);
        return await response.json();
    } catch (error) {
        console.error("Error fetching posts: ", error)
        return { status: `error`, message: error.message };
    }
};

/*
 * createPost - Calls POST create endpoint to create a new blog post
 */
const createPost = async (post, hashtag) => {
    try {
        const response = await fetch(createPostURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ post, hashtag })
        });
        return await response.json();
    } catch (error) {
        console.error("Error creating post: ", error);
        return { status: `error`, message: error.message };
    }
};

/*
 * deletePost - Calls DELETE post endpoint to delete a blog post
 */
const deletePost = async (id) => {
    function removePostElement(_id) {
        const element = document.getElementById(_id);
        if (element) {
            element.remove();
            const filterCard = document.getElementById('filter-card');
            const postDiv = document.getElementById('posts');
            if (postDiv.children.length > 0) {
                filterCard.style.display = '';
            } else if (filterCard && document.getElementById('filter-text').value.trim() === '') {
                filterCard.style.display = '';
            }
        } else {
            console.error(`Element with id ${_id} not found.`);
        }
    }

    try {
        const response = await fetch(
            `${deletePostURL}/${id}`, {
            method: 'DELETE'
        });
        const data = await response.json();
        if (data.status === 'success') {
            removePostElement(id);
        }
        loadPosts()
    } catch (error) {
        console.error("Error deleting post: ", error);
        return { status: `error`, message: error.message };
    }
};