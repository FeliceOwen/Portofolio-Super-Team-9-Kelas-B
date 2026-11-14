function changeBackground() {
    let colors = [
        "#fff8df",
        "#fce4ec",
        "#e3f2fd",
        "#e8f5e9",
        "#f3e5f5"
    ];
    let random = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[random];
}


function showConfetti() {
    let emojis = ["🎉", "✨", "💗", "🌸", "⭐"];

    for (let i = 0; i < 200; i++) {
        let confetti = document.createElement("span");
        confetti.className = "confetti";
        confetti.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.animationDuration = (2 + Math.random() * 5) + "s";
        document.body.appendChild(confetti);
        setTimeout(function() {confetti.remove();}, 5000);
    }
}