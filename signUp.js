// Create a new User
Parse.initialize("sVdIam7tIuOg3Zu7ZWzKOCrFrbRjRpCIoLiE1GIZ", "DEflySFO8oBIY6OqkCTYoWnXO8v7nPKH8NldG4Yn"); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
    Parse.serverURL = "https://parseapi.back4app.com/";

async function createParseUser() {
    // Creates a new Parse "User" object, which is created by default in your Parse app
    let user = new Parse.User();
    // Set the input values to the new "User" object
    user.set("username", document.getElementById("username").value);
    user.set("email", document.getElementById("email").value);
    user.set("password", document.getElementById("password").value);
    try {
        // Call the save method, which returns the saved object if successful
        user = await user.save();
        if (user !== null) {
            // Redierct to leadfinder
            location.href = "LeadFinder.html";
        }
    } catch (error) {
        alert(`Error: ${error.message}`);
    }
}

// Add on click listener to call the create parse user function
document.getElementById("createButton").addEventListener("click", async function () {
    createParseUser();
});