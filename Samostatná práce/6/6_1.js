// Function to log user information
function logUserInfo(user) {
    console.log("Name: " + user.firstName + " " + user.lastName);
    console.log("Email: " + user.email);
    console.log("Role: " + user.role);
}

// Example user object
const user = {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    role: "Admin",
    isActive: true,
};

// Log user information multiple times
logUserInfo(user);
logUserInfo(user); // Repeated logging
if (user.isActive) {
    console.log("Status: Active");
}
