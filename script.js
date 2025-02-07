document.addEventListener("DOMContentLoaded", function() {
    console.log("Portfolio website loaded successfully.");
});

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    
    form.addEventListener("submit", function(event) {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields before submitting.");
            event.preventDefault(); // Prevent form submission
        }
    });
});
