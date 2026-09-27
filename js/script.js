/* ==================================================
   MOBILE NAVIGATION
================================================== */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const navItems = document.querySelectorAll(".nav-link");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");

    menuToggle.setAttribute(
        "aria-expanded",
        isOpen
    );

});


navItems.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("open");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});



/* ==================================================
   HEADER SCROLL EFFECT
================================================== */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});



/* ==================================================
   RESUME DROPDOWN
================================================== */

const resumeButton =
    document.getElementById("resumeButton");

const resumeWrapper =
    document.querySelector(".resume-wrapper");


resumeButton.addEventListener("click", (event) => {

    event.stopPropagation();

    resumeWrapper.classList.toggle("open");

    const isOpen =
        resumeWrapper.classList.contains("open");

    resumeButton.setAttribute(
        "aria-expanded",
        isOpen
    );

});


document.addEventListener("click", (event) => {

    if (!resumeWrapper.contains(event.target)) {

        resumeWrapper.classList.remove("open");

        resumeButton.setAttribute(
            "aria-expanded",
            "false"
        );

    }

});



/* ==================================================
   PERSONAL DETAILS
================================================== */

const personalToggle =
    document.getElementById("personalToggle");

const personalDetails =
    document.getElementById("personalDetails");


personalToggle.addEventListener("click", () => {

    personalDetails.classList.toggle("open");

    personalToggle.classList.toggle("open");

    const isOpen =
        personalDetails.classList.contains("open");

    personalToggle.setAttribute(
        "aria-expanded",
        isOpen
    );

    const label =
        personalToggle.querySelector("span:first-child");

    if (isOpen) {

        label.textContent =
            "Hide Personal Details";

    } else {

        label.textContent =
            "View Personal Details";

    }

});



/* ==================================================
   EXPERIENCE DETAILS
================================================== */

const detailButtons =
    document.querySelectorAll(".details-button");


detailButtons.forEach(button => {

    button.addEventListener("click", () => {

        const details =
            button.nextElementSibling;

        details.classList.toggle("open");

        button.classList.toggle("open");

        const isOpen =
            details.classList.contains("open");

        button.setAttribute(
            "aria-expanded",
            isOpen
        );

        button.childNodes[0].nodeValue =
            isOpen
                ? "Hide Details "
                : "View Details ";

    });

});



/* ==================================================
   SCROLL REVEAL
================================================== */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});



/* ==================================================
   ACTIVE NAVIGATION
================================================== */

const sections =
    document.querySelectorAll("main section");


const sectionObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    const currentId =
                        entry.target.id;

                    navItems.forEach(link => {

                        link.classList.remove(
                            "active"
                        );

                        if (
                            link.getAttribute("href") ===
                            `#${currentId}`
                        ) {

                            link.classList.add(
                                "active"
                            );

                        }

                    });

                }

            });

        },

        {
            rootMargin:
                "-40% 0px -50% 0px"
        }

    );


sections.forEach(section => {

    sectionObserver.observe(section);

});



/* ==================================================
   CONTACT FORM - FORMSPREE
================================================== */

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (contactForm) {

    contactForm.addEventListener("submit", async (event) => {

        event.preventDefault();

        const submitButton = contactForm.querySelector(
            'button[type="submit"]'
        );

        const originalButtonText = submitButton.textContent;

        submitButton.disabled = true;
        submitButton.textContent = "Sending...";

        if (formStatus) {
            formStatus.textContent = "Sending your message...";
        }

        try {

            const formData = new FormData(contactForm);

            const response = await fetch(
                contactForm.action,
                {
                    method: "POST",
                    body: formData,
                    headers: {
                        "Accept": "application/json"
                    }
                }
            );

            if (response.ok) {

                if (formStatus) {
                    formStatus.textContent =
                        "✓ Message sent successfully! Thank you for contacting me.";
                }

                contactForm.reset();

            } else {

                if (formStatus) {
                    formStatus.textContent =
                        "Unable to send the message. Please try again.";
                }
            }

        } catch (error) {

            if (formStatus) {
                formStatus.textContent =
                    "Unable to send the message. Please check your internet connection and try again.";
            }

        } finally {

            submitButton.disabled = false;
            submitButton.textContent = originalButtonText;

        }

    });

}



/* ==================================================
   BACK TO TOP
================================================== */

const backToTop =
    document.getElementById("backToTop");


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});
