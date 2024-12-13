function showPopup() {
    document.getElementById("loginModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("loginModal").style.display = "none";
}

async function authenticateUser(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Send user credentials to the server for verification
    const response = await fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });

    const data = await response.json();

    if (data.success) {
        document.getElementById("authMessage").textContent = "Login successful!";
        closeModal();
        localStorage.setItem("isLoggedIn", true);
    } else {
        document.getElementById("authMessage").textContent = "Invalid username or password.";
    }
}
