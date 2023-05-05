function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const loader = document.querySelector('.loader'); 
  if (username.trim() === '') {
      showMessage('Please enter your username');
      return;
  }
  if (password.trim() === '') {
      showMessage('Please enter your password');
      return;
  }
  
  if (username === 'admin' && password === 'admin') {
    loader.style.display = 'block';
      setTimeout(function() {
          loader.style.display = 'none';
          showMessage('Login successful');
      }, 1000);
      setTimeout(function(){
      window.location.href = 'admin.html';
      },2000);
  } 
  else {
    if (username === 'kaat' && password === 'kaat') {
      loader.style.display = 'block';
        setTimeout(function() {
            loader.style.display = 'none';
            showMessage('Login successful');
        }, 1000);
        setTimeout(function(){
        window.location.href = 'kaat.html';
        },2000);
    } 
    else {
      if (username === 'thomas' && password === 'thomas') {
        loader.style.display = 'block';
          setTimeout(function() {
              loader.style.display = 'none';
              showMessage('Login successful');
          }, 1000);
          setTimeout(function(){
          window.location.href = 'thomas.html';
          },2000);
      } 
      else {
       showMessage('Invalid username or password');
       return;
      }
    }
  }

}

function showMessage(message) {
  document.getElementById('message').innerHTML = message;
}

