function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

function randomChance(chance) {
    return Math.random() < chance;
}

let container = document.getElementById("leprechaun-container");

async function updateContainer() {
    while (true) {
        const imageCount = Math.floor(Math.random() * 16);

        for (let i = 0; i < imageCount; i++) {
            const image = document.createElement("img");
            image.src = `leprechauns/leprechaun_${Math.floor(
                Math.random() * 16
            )}.gif`;
            image.style.position = "absolute";
            image.style.left = `${Math.floor(Math.random() * 100)}%`;
            image.style.top = `${Math.floor(Math.random() * 100)}%`;
            image.style.animation = `rotation ${
                Math.random() * 4.5 + 0.5
            }s infinite linear`;
            container.appendChild(image);
        }

        if (randomChance(0.5)) {
            const text = document.createElement("h1");
            text.textContent = "eric im gonna beat ur gass without the g";
            text.style.position = "absolute";
            text.style.left = `${Math.floor(Math.random() * 100)}%`;
            text.style.top = `${Math.floor(Math.random() * 100)}%`;
            text.style.transform = "translate(-50%, -50%)";
            container.appendChild(text);
        }

        await sleep(1000);
    }
}

updateContainer();
