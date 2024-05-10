function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function updateBackground() {
    while (true) {
        const random = Math.floor(Math.random() * 16);

        let body = document.getElementsByTagName("body")[0];

        body.style.backgroundImage = `url(leprechauns/leprechaun_${random}.gif)`;

        await sleep(500);
    }
}

updateBackground();
