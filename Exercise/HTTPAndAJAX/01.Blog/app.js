function attachEvents() {
    const baseURL = 'http://localhost:3030/jsonstore/blog/';

    const loadPostsButton = document.getElementById('btnLoadPosts');
    const vewPosts = document.getElementById('btnViewPost');
    const postSelect = document.getElementById('posts');
    const postTitle = document.getElementById('post-title');
    const postBody = document.getElementById('post-body');
    const postComments = document.getElementById('post-comments');

    let allPosts = {};

    loadPostsButton.addEventListener('click', async () => {

        postSelect.innerHTML = '';

        const response = await fetch(baseURL + 'posts');
        allPosts = await response.json();

        //console.log(allPosts);

        for (const [postId, postObject] of Object.entries(allPosts)) {
            const option = document.createElement('option');
            option.value = postId;
            option.textContent = postObject.title;
            postSelect.appendChild(option);
        }
    })
}

attachEvents();