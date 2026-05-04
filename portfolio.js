 const form = document.getElementById("contact-form");
    const status = document.getElementById("form-status");

    form.addEventListener("submit", async function(e) {
        e.preventDefault(); // stop redirect

        const data = new FormData(form);

        const response = await fetch("https://formspree.io/f/mykoewok", {
            method: "POST",
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            status.innerHTML = "✅ Message sent successfully!";
            form.reset();
        } else {
            status.innerHTML = "❌ Something went wrong. Try again.";
        }
    });