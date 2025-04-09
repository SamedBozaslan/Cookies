document.addEventListener("DOMContentLoaded", () => {
    const banner = document.getElementById("cookie-banner");
    const acceptBtn = document.getElementById("accept-cookies");

    const hasConsented = localStorage.getItem("cookieConsent");

    if (!hasConsented) {
        banner.style.display = "flex";
    }

    acceptBtn.addEventListener("click", () => {
        localStorage.setItem("cookieConsent", "true");
        banner.style.display = "none";
    });
});
