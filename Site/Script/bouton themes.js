// Bouton de changement de thème //
// Appelée dans : page 1; egyptienne; grec; romaine et nordique (HTML) //
// Liée à : theme dark; theme page 1; theme egypte; theme grec; theme rome et theme nordic (CSS) //

document.addEventListener("DOMContentLoaded", () => {
    const body = document.querySelector("body");
    const toggle = document.querySelector(".toggle");
    const toggle2 = document.querySelector(".toggle2");

    let getMode = localStorage.getItem("mode");

    // Fonction pour mettre à jour le thème
    function updateTheme(themeClass, otherThemeClass) {
        body.classList.toggle(themeClass);
        body.classList.remove(otherThemeClass); // Supprimez l'autre classe du thème

        if (!body.classList.contains(themeClass)) {
            localStorage.setItem("mode", "light");
        } else {
            localStorage.setItem("mode", themeClass);
        }
    }

    // Initialisation du thème
    if (getMode === "dark") {
        body.classList.add("dark");
        toggle.classList.add("active");
    } else if (getMode === "sombre") {
        body.classList.add("sombre");
        toggle2.classList.add("active");
    }

    // Gestion du premier bouton de basculement de thème
    toggle.addEventListener("click", () => {
        updateTheme("dark", "sombre");
        toggle2.classList.remove("active");
        toggle.classList.toggle("active");
    });

    // Gestion du deuxième bouton de basculement de thème
    toggle2.addEventListener("click", () => {
        updateTheme("sombre", "dark");
        toggle.classList.remove("active");
        toggle2.classList.toggle("active");
    });
});
