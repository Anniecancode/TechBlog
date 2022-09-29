const addComment = async (event) => {
    event.preventDefault();

    const comment = document.getElementById('comment').value.trim();

    const id = document.location.pathname.split('/').pop();

    if (comment) {
        const response = await fetch(`/api/post/${id}/comment`, {
            method: 'POST',
            body: JSON.stringify({ comment_content: comment }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert ('Post failed')
        }
    }
};

document
    .getElementById('addComment')
    .addEventListener('submit', addComment);