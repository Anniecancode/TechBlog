const updatePost = async (event) => {
    event.preventDefault();
    
    const id = document.getElementById('e-post-id').value.trim();
    //const id = document.location.pathname.split('/').pop();
    const title = document.getElementById('e-post-title').value.trim();
    const content = document.getElementById('e-post-content').value.trim();

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
    .getElementById('updatePost')) {
  
document
    .getElementById('updatePost')
    .addEventListener('submit', updatePost);
}
else {document
    .getElementById('deletePost')
    .addEventListener('click', deletePost);
}