const newStoryHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#story-title').value.trim();
    const summary = document.querySelector('#story-summary').value.trim();
    const story_content = document.querySelector('#story-content').value.trim();
  
    if (title && summary && story_content) {
      const response = await fetch(`/api/newstory`, {
        method: 'POST',
        body: JSON.stringify({ title, summary, story_content }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create project');
      }
    }
  };

document
  .querySelector('.story-form')
  .addEventListener('submit', newStoryHandler);