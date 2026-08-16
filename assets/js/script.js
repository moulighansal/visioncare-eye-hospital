document.addEventListener("DOMContentLoaded", function () {

    const contactTriggers = document.querySelectorAll(".contact-trigger");
const contactModal = document.getElementById("contactModal");
const contactClose = document.getElementById("contactClose");

contactTriggers.forEach(trigger => {
    trigger.addEventListener("click", function (e) {
        e.preventDefault();
        contactModal.classList.add("active");
    });
});

contactClose.addEventListener("click", function () {
    contactModal.classList.remove("active");
});

contactModal.addEventListener("click", function (e) {
    if (e.target === contactModal) {
        contactModal.classList.remove("active");
    }
});
    

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            alert("Thank you! Your message has been received. Our team will contact you shortly.");

            contactForm.reset();
            contactModal.classList.remove("active");
        });
    }

});