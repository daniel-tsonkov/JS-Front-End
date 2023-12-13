function attachEvents() {
    const baseURL = 'http://localhost:3030/jsonstore/blog/';

    const loadPostsButton = document.getElementById('btnLoadPosts');
    const viewPosts = document.getElementById('btnViewPost');
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
    });

    viewPosts.addEventListener('click', async () => {
        postBody.innerHTML = '';
        postComments.innerHTML = '';
        
        const postId = postSelect.value;

        postTitle.textContent = allPosts[postId].title;
        postBody.textContent = allPosts[postId].body;

        const response = await fetch(baseURL + 'comments');
        const commentsInfo = await response.json();

        const filteredComments = Object.values(commentsInfo).filter(e => e.postId === postId);
        filteredComments.forEach(element => {
            const li = document.createElement('li');
            li.id = element.id;
            li.textContent = element.text;

            postComments.appendChild(li);
        });
    });
}

attachEvents();