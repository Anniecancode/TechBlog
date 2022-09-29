const postId = document.querySelector('input[name="post-id"]').value;

const updatePost = async (event) => {
    event.preventDefault();
console.log(postId)
    const title = document.getElementById('post-title').value.trim();
    const content = document.getElementById('post-content').value.trim();
 console.log(`this is ${title, content}`)

    if (title && content) {
        const response = await fetch(`/api/post/${postId}`, {
            method: 'PUT',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert ('Update failed')
        }
    }
};

const deletePost = async (event) => {
    event.preventDefault();

	const id = document.location.pathname.split('/').pop();
   
    const response = await fetch(`/api/post/${id}`, {
        method: 'DELETE',
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } 
};

if (document
    .getElementById('createPost')) {
  
document
    .getElementById('createPost')
    .addEventListener('submit', updatePost);
}
else {document
    .getElementById('deletePost')
    .addEventListener('click', deletePost);
}