
// Simon's Portfolio JavaScript

console.log("Welcome to Simon's Developer Portfolio!");

// Close mobile navigation after clicking a link
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

const navbarMenu = document.querySelector("#navbarMenu");

navLinks.forEach(link => {
    link.addEventListener("click", () => {

        if (
            navbarMenu.classList.contains("show") &&
            window.bootstrap
        ) {
            const menu = bootstrap.Collapse.getOrCreateInstance(navbarMenu);
            menu.hide();
        }

    });
});

// Open a prefilled email draft; the visitor must send it from their email app.
const contactForm = document.querySelector("#contact-form");
const contactFormStatus = document.querySelector("#contact-form-status");

if (contactForm && contactFormStatus) {
    contactForm.addEventListener("submit", event => {
        event.preventDefault();
        contactFormStatus.hidden = false;

        if (!contactForm.checkValidity()) {
            contactFormStatus.classList.add("is-error");
            contactFormStatus.textContent = "Please complete all fields with a valid email address. Your message has not been sent.";
            contactForm.reportValidity();
            return;
        }

        contactFormStatus.classList.remove("is-error");
        const name = document.querySelector("#contact-name").value.trim();
        const email = document.querySelector("#contact-email").value.trim();
        const subject = document.querySelector("#contact-subject").value.trim();
        const message = document.querySelector("#contact-message").value.trim();
        const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
        const mailtoUrl = `mailto:simontesfaye782@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        contactFormStatus.textContent = "Your default email app should open with a draft. Review it and send it there; your message has not been sent yet.";
        window.location.href = mailtoUrl;
    });
}
