const users = {
    "Auld_D3n": "PssAdmin01",
    "febdem123": "PssAdmin02",
    "aiden_ju": "PssAdmin03"
};

const fallbackPassword = "Pssmyanmar";

function checkLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (users[username] && (users[username] === password || password === fallbackPassword)) {
        // Login successful
        alert("Login successful!");
        return true;  // Allow form submission
    } else {
        alert("Invalid username or password");
        return false;  // Prevent form submission
    }
}
