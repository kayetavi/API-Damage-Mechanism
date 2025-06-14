function login() {
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;
  const error = document.getElementById('errorMsg');

  const validUsers = [
    { username: "admin", password: "admin123" },
    { username: "user", password: "user123" },
    { username: "john", password: "pass123" },
    { username: "test", password: "test456" }
  ];

  const found = validUsers.find(u => u.username === user && u.password === pass);

  if (found) {
    localStorage.setItem('loggedInUser', user);
    window.location.href = "dashboard.html";
  } else {
    error.textContent = "Invalid username or password";
  }
}
