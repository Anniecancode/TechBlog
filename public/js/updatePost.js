updatePost = async (event) => {
    event.preventDefault();

    const title = document.getElementById('post-title').value.trim();
    const content = document.getElementById('post-content').value.trim();

    const pathSplit = document.location.pathname.split("/");
	const id = pathSplit[pathSplit.length - 1];

    if (title && content) {
        const response = await fetch(`api/post/${id}`, {
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

deletePost = async (event) => {
    event.preventDefault();

    const pathSplit = document.location.pathname.split("/");
	const id = pathSplit[pathSplit.length - 1];
   
    const response = await fetch(`api/post/${id}`, {
        method: 'DELETE',
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } 
};

document
    .getElementById('updatePost')
    .addEventListener('submit', updatePost);

    document
    .getElementById('deletePost')
    .addEventListener('click', deletePost);