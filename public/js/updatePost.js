const updatePost = async (event) => {
    event.preventDefault();

    const title = document.getElementById('post-title').value.trim();
    const content = document.getElementById('post-content').value.trim();
 console.log(`this is ${title, content}`)
	const id = document.location.pathname.split('/').pop();

    if (title && content) {
        const response = await fetch(`/api/post/${id}`, {
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