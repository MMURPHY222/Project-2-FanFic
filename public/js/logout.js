// make a call to the logout route
const logout = async () => {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      // if logout successful, redirect to homepage
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  };
// event listener on logout button click
document.querySelector('#logout').addEventListener('click', logout);