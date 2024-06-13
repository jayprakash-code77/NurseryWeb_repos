function viewFullPost(event) {
    event.preventDefault();
    const postContainer = event.target.previousElementSibling;
    const fullScreenPost = document.getElementById('fullScreenPost');
    const postContent = fullScreenPost.querySelector('.post-content');

    postContent.innerHTML = postContainer.innerHTML;
    document.getElementById('posts').style.display = 'none';
    fullScreenPost.style.display = 'block';
}

function goBack(event) {
    event.preventDefault();
    
    document.getElementById('fullScreenPost').style.display = 'none';
    document.getElementById('posts').style.display = 'block';
}