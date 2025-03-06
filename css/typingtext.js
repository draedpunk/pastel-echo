document.addEventListener("DOMContentLoaded", function () {
    let messages = [
        "www.pastel_echo.net",
        "seja bem-vindo a Pastel Echo",
        "clique nos icones ao lado"
    ];
    
    let speed = 100;
    let delay = 2000;
    let repeat = true;
    
    let textElement = document.getElementById("typing-text");
    let cursorElement = document.getElementById("cursor");

    let currMsg = 0;
    let i = 0;
    let typingEffect = "";

    function typeText() {
        if (!textElement || !cursorElement) return;

        typingEffect += messages[currMsg].charAt(i);
        textElement.innerHTML = typingEffect; 

        i++;

        if (i === messages[currMsg].length) {
            currMsg++;
            i = 0;
            typingEffect = "";
            
            if (currMsg === messages.length) {
                if (!repeat) return;
                currMsg = 0;
            }

            setTimeout(typeText, delay);
        } else {
            setTimeout(typeText, speed);
        }
    }

    typeText();
});