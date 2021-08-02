// creates a new user
const signupFormHandler = async (event) => {
    event.preventDefault();
    // take info from user input fields and trim white space
    const user_name = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    // if all fields filled, fetch api route to post to server
    if (user_name && email && password) {
      const response = await fetch('/api/users/signup', {
        method: 'POST',
        body: JSON.stringify({ user_name, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      // if successful, redirect to profile
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
 };

// event listener on submit 
document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);