// create a new comment
const writeCommentHandler = async (event) => {
    event.preventDefault();
    // select content from input and trim
    const comment_body = document.querySelector('#comment-body').value.trim();
    // gather the story id path from the window
    let storyPath = document.location.pathname;
    if (comment_body) {
      // use story path to create api call to post
      const response = await fetch(`/api/newcomment`+ storyPath, {
        method: 'POST',
        body: JSON.stringify({ comment_body }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // if okay, reload current story id path
        document.location.replace(storyPath);
      } else {
        alert(response.statusText);
      }
    }
  };
// event listener on submit
document
  .querySelector('.comment-form')
  .addEventListener('submit', writeCommentHandler);