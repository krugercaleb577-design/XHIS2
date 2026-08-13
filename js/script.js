/* =========================================================
   NOVATECH SERVICE OPERATIONS PORTAL
   Global JavaScript
========================================================= */


/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const navLinks = document.getElementById("navLinks");

if (mobileMenuBtn && navLinks) {

    mobileMenuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("show");

        const icon = mobileMenuBtn.querySelector("i");

        if (navLinks.classList.contains("show")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });

}


/* =========================================================
   ANIMATED STATISTICS
========================================================= */

const counters = document.querySelectorAll("[data-target]");

const animateCounter = (counter) => {

    const target = Number(counter.dataset.target);

    let current = 0;

    const increment = Math.max(Math.ceil(target / 80), 1);

    const updateCounter = () => {

        current += increment;

        if (current >= target) {

            counter.textContent = target.toLocaleString();

            return;

        }

        counter.textContent = current.toLocaleString();

        requestAnimationFrame(updateCounter);
    };

    updateCounter();
};


/* =========================================================
   START COUNTERS WHEN VISIBLE
========================================================= */

if (counters.length > 0) {

    const observer = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    animateCounter(entry.target);

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.5
        }
    );

    counters.forEach(counter => {
        observer.observe(counter);
    });

}


/* =========================================================
   CURRENT YEAR
========================================================= */

const currentYear = document.getElementById("currentYear");

if (currentYear) {

    currentYear.textContent = new Date().getFullYear();

}


/* =========================================================
   CLOSE MOBILE MENU AFTER CLICKING A LINK
========================================================= */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        if (navLinks) {
            navLinks.classList.remove("show");
        }

        if (mobileMenuBtn) {

            const icon = mobileMenuBtn.querySelector("i");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });

});