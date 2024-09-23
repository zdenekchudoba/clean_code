// Define initial user session
let userSession = {
  isLoggedIn: true,
  token: "abc123"
};

// Logout function that returns a new user session state
function logout(currentSession) {
  const newSession = {
    isLoggedIn: false,
    token: null
  };
  console.log("User logged out.");
  return newSession;
}

// Update userSession with the new state after logout
userSession = logout(userSession);
