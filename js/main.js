/* =========================================================
   HOTEL TAMIL NADU — MAIN JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       MOBILE NAVIGATION
       ===================================================== */

    const menuButton = document.getElementById("mobile-menu-button");
    const navigation = document.getElementById("main-navigation");

    if (menuButton && navigation) {

        menuButton.addEventListener("click", () => {

            const isOpen = navigation.classList.toggle("active");

            menuButton.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

            menuButton.setAttribute(
                "aria-label",
                isOpen
                    ? "Close navigation menu"
                    : "Open navigation menu"
            );

        });


        /* Close menu after clicking a navigation link */

        const navigationLinks =
            navigation.querySelectorAll("a");

        navigationLinks.forEach((link) => {

            link.addEventListener("click", () => {

                navigation.classList.remove("active");

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuButton.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );

            });

        });

    }


    /* =====================================================
       HEADER SCROLL EFFECT
       ===================================================== */

    const header = document.getElementById("site-header");

    const updateHeader = () => {

        if (!header) {
            return;
        }

        if (window.scrollY > 40) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    };

    updateHeader();

    window.addEventListener(
        "scroll",
        updateHeader,
        { passive: true }
    );


    /* =====================================================
       CLOSE MOBILE MENU WHEN CLICKING OUTSIDE
       ===================================================== */

    document.addEventListener("click", (event) => {

        if (!navigation || !menuButton) {
            return;
        }

        const clickedInsideNavigation =
            navigation.contains(event.target);

        const clickedMenuButton =
            menuButton.contains(event.target);

        if (
            navigation.classList.contains("active") &&
            !clickedInsideNavigation &&
            !clickedMenuButton
        ) {

            navigation.classList.remove("active");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            menuButton.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        }

    });


    /* =====================================================
       ESCAPE KEY — CLOSE MOBILE MENU
       ===================================================== */

    document.addEventListener("keydown", (event) => {

        if (event.key !== "Escape") {
            return;
        }

        if (
            navigation &&
            navigation.classList.contains("active")
        ) {

            navigation.classList.remove("active");

            if (menuButton) {

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuButton.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );

            }

        }

    });


    /* =====================================================
       CURRENT PAGE NAVIGATION
       ===================================================== */

    const currentPage =
        window.location.pathname.split("/").pop() ||
        "index.html";

    const navigationLinks =
        document.querySelectorAll(".main-navigation a");

    navigationLinks.forEach((link) => {

        const linkPage =
            link.getAttribute("href");

        if (!linkPage) {
            return;
        }

        const cleanLinkPage =
            linkPage.split("#")[0];

        if (
            cleanLinkPage === currentPage &&
            !link.classList.contains("nav-book-button")
        ) {

            link.setAttribute("aria-current", "page");

        }

    });


    /* =====================================================
       SMOOTH INTERNAL ANCHOR SCROLL
       ===================================================== */

    const internalLinks =
        document.querySelectorAll('a[href^="#"]');

    internalLinks.forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetId =
                link.getAttribute("href");

            if (
                !targetId ||
                targetId === "#"
            ) {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            const headerHeight =
                header ? header.offsetHeight : 0;

            const targetPosition =
                target.getBoundingClientRect().top +
                window.scrollY -
                headerHeight -
                15;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });

        });

    });


    /* =====================================================
       IMAGE ERROR HANDLING
       ===================================================== */

    const images =
        document.querySelectorAll("img");

    images.forEach((image) => {

        image.addEventListener("error", () => {

            image.classList.add("image-error");

        });

    });


    /* =====================================================
       PHONE NUMBER — TRACK CLICK
       ===================================================== */

    const phoneLinks =
        document.querySelectorAll(
            'a[href^="tel:"]'
        );

    phoneLinks.forEach((link) => {

        link.addEventListener("click", () => {

            console.log(
                "Hotel Tamil Nadu phone enquiry initiated."
            );

        });

    });


    /* =====================================================
       WHATSAPP — TRACK CLICK
       ===================================================== */

    const whatsappLinks =
        document.querySelectorAll(
            'a[href*="wa.me"]'
        );

    whatsappLinks.forEach((link) => {

        link.addEventListener("click", () => {

            console.log(
                "Hotel Tamil Nadu WhatsApp enquiry initiated."
            );

        });

    });


    /* =====================================================
       CURRENT YEAR
       ===================================================== */

    const yearElements =
        document.querySelectorAll("[data-current-year]");

    const currentYear =
        new Date().getFullYear();

    yearElements.forEach((element) => {

        element.textContent = currentYear;

    });

});