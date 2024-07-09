document.addEventListener("DOMContentLoaded", () => {
    const body = document.querySelector("body");
    const imageElement = document.getElementById("logo");
    const toggle = document.querySelector(".toggle");
    const toggle2 = document.querySelector(".toggle2");

    let getMode = localStorage.getItem("mode");

    // Fonction pour mettre à jour le thème
    function updateTheme(themeClass, logoSrc, otherThemeClass) {
        body.classList.toggle(themeClass);
        body.classList.remove(otherThemeClass); // Supprimez l'autre classe du thème

        imageElement.src = logoSrc;

        if (!body.classList.contains(themeClass)) {
            localStorage.setItem("mode", "light");
            // Si le thème light est activé, définissez le src sur "../Image/logo PP.png"
            imageElement.src = "../Image/logo PP.png";
        } else {
            localStorage.setItem("mode", themeClass);
        }
    }

    // Initialisation des thèmes
    if (getMode === "dark") {
        body.classList.add("dark");
        imageElement.src = "../Image/logo PP dark.png";
        toggle.classList.add("active");
    } else if (getMode === "sombre") {
        body.classList.add("sombre");
        imageElement.src = "../Image/logo PP sombre.png";
        toggle2.classList.add("active");
    } else {
        // Thème par défaut (light)
        imageElement.src = "../Image/logo PP.png";
    }

    // Gestion du premier bouton de basculement de thème
    toggle.addEventListener("click", () => {
        updateTheme("dark", "../Image/logo PP dark.png", "sombre");
        toggle2.classList.remove("active");
        toggle.classList.toggle("active");
    });

    // Gestion du deuxième bouton de basculement de thème
    toggle2.addEventListener("click", () => {
        updateTheme("sombre", "../Image/logo PP sombre.png", "dark");
        toggle.classList.remove("active");
        toggle2.classList.toggle("active");
    });
});
