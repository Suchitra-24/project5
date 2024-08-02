document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    const formMessage = document.getElementById("form-message");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();

        if (name && email && message) {
            // You can add code here to handle the form submission, such as sending the data to a server
            formMessage.textContent = "Thank you for your message!";
            formMessage.style.color = "green";
            formMessage.classList.remove("hidden");
            form.reset();
        } else {
            formMessage.textContent = "Please fill out all fields.";
            formMessage.style.color = "red";
            formMessage.classList.remove("hidden");
        }
    });
});