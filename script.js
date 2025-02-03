const messages = [
    "beneran nih???",
    "serius?????",
    "asli ini???",
    "sayanggg ayo donggg",
    "coba pikirin lagii",
    "jangan tolakk sedi aku :(",
    "beneran sendihh",
    "sedih benerann banget banget....",
    "oke lah kalo gitu, aku nga bakal nanya lagi",
    "bercandaaa, jawab iya yaaaa! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}