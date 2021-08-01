const writeCommentHandler = async (event) => {
    event.preventDefault();
  
    const comment_body = document.querySelector('#comment-body').value.trim();
    let storyPath = document.location.pathname;
    if (comment_body) {
      const response = await fetch(`/api/newcomment`+ storyPath, {
        method: 'POST',
        body: JSON.stringify({ comment_body }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace(storyPath);
      } else {
        alert(response.statusText);
      }
    }
  };

document
  .querySelector('.comment-form')
  .addEventListener('submit', writeCommentHandler);