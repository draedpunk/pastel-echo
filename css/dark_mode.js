document.addEventListener("DOMContentLoaded", function () {
    const socialsDiv = document.getElementById("socials");
    const themeIcon = socialsDiv.querySelector("i.fa-solid"); // Pega o ícone dentro da div #socials
    const body = document.body;

    themeIcon.addEventListener("click", function () {
        body.classList.toggle("dark-mode"); // Alterna o tema escuro

        // Alterna os ícones entre lua (noturno) e sol (claro)
        if (body.classList.contains("dark-mode")) {
            themeIcon.classList.replace("fa-moon", "fa-sun"); 
        } else {
            themeIcon.classList.replace("fa-sun", "fa-moon");
        }
    });
});