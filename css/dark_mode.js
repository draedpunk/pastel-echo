document.addEventListener("DOMContentLoaded", function () {
    const socialsDiv = document.getElementById("socials");
    const themeIcon = socialsDiv.querySelector("i.fa-solid");
    const body = document.body;

    themeIcon.addEventListener("click", function () {
        body.classList.toggle("dark-mode"); 

        if (body.classList.contains("dark-mode")) {
            themeIcon.classList.replace("fa-moon", "fa-sun"); 
        } else {
            themeIcon.classList.replace("fa-sun", "fa-moon");
        }
    });
});