/*
 * Class: SWE2511 - Blogger
 * Name: Kaiden Pollesch
 * Section: 111
 *
 * Blogger client user interface routines
 */

window.onload = () => {
    document.getElementById('submit-post').addEventListener('click', async () => {
        const postText = document.getElementById('post-text').value;
        const hashtag = document.getElementById('hashtag').value;
        const errorDiv = document.getElementById('create-post-error');
        errorDiv.textContent = '';

        if (!isNonEmptyString(postText)) {
            errorDiv.textContent = 'Post is required and must be a non-empty string';
            return;
        }
    if (isDefined(hashtag) && hashtag.length > 0 && (!hashtag.startsWith('#') || !isAlphaNumeric(hashtag.slice(1)) || !startsWithLetter(hashtag.slice(1)))) {
        errorDiv.textContent = 'Invalid hashtag format.';
        return;
    }
        try {
            const response = await createPost(postText, hashtag);
            if (response.status === 'success') {
                await loadPosts();
            } else {
                errorDiv.textContent = response.message;
            }
        } catch (error) {
            errorDiv.textContent = error.message;
        }
    });

    document.getElementById('filter-text').addEventListener('input', () => {
        loadPosts()
    });
    loadPosts();
};

const loadPosts = async () => {
    const filterText = document.getElementById('filter-text').value.toLowerCase();
    const postsList = document.getElementById('posts-list');
    postsList.innerHTML = '';

    try {
        let response = await getPosts();
        if (response.status === 'success') {
            response.posts.forEach((post) => {
                if (!filterText
                    || !response.posts.some(post => post.hashtag && post.hashtag.toLowerCase().includes(filterText))
                    || (post.hashtag && post.hashtag.toLowerCase().includes(filterText))) {
                    const postCard = document.createElement('li');
                    postCard.className = 'card mb-3';
                    postCard.innerHTML = `
                        <div class="card-body">
                            <h5 class="card-title">${new Date(post.creation_date).toLocaleString()}</h5>
                            ${post.hashtag ? `<span class="badge bg-primary">${post.hashtag}</span>` : ''}
                            <p class="card-text">${post.post}</p>
                            <button class="btn btn-danger" onclick="deletePost('${post._id}')">Delete</button>
                        </div>
                    `;
                    postsList.appendChild(postCard);
                }
            });
        } else {
            postsList.innerHTML = `<p class="text-danger)> ${response.message}</p>`;
        }
    } catch (error) {
        postsList.innerHTML = `<p class="text-danger)> ${error.message}</p>`;
    }
}