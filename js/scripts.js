document.addEventListener("DOMContentLoaded", function () {
    const goButton = document.querySelector("#goButton");
    const lightning = document.querySelector("#lightning-container");
    const audioElements = {
        starskyHutch: document.getElementById("wowStarsky"),
        midnightInParis: document.getElementById("wowParis"),
        cars: document.getElementById("wowCars"),
        marleyAndMe: document.getElementById("wowMarley"),
        shanghaiKnights: document.getElementById("wowKnights"),
        weddingCrashers: document.getElementById("wowWedding"),
        meetTheParents: document.getElementById("wowParents"),
        zoolander: document.getElementById("wowZoolander"),
    };

    let lightningSpin = 0; // Define lightningSpin outside the function

    function rotateLightning() {
        const randomRotation = Math.floor(Math.random() * 360);
        const totalRotation = randomRotation + lightningSpin; // Use updated lightningSpin
        lightning.style.transform = "rotate(" + totalRotation + "deg)";

        lightning.addEventListener(
            "transitionend",
            function endAnimation() {
                playAudio(randomRotation);
                lightning.removeEventListener("transitionend", endAnimation);
            },
            { once: true }
        );
    }

    function playAudio(randomRotation) {
        for (const [movie, audio] of Object.entries(audioElements)) {
            const angleRange = getAngleRange(movie);
            if (
                randomRotation >= angleRange.min &&
                randomRotation <= angleRange.max
            ) {
                audio.play();
                break;
            }
        }
    }

    function getAngleRange(movie) {
        const ranges = {
            starskyHutch: { min: 0, max: 45 },
            midnightInParis: { min: 46, max: 90 },
            cars: { min: 91, max: 135 },
            marleyAndMe: { min: 136, max: 180 },
            shanghaiKnights: { min: 181, max: 225 },
            weddingCrashers: { min: 226, max: 270 },
            meetTheParents: { min: 271, max: 315 },
            zoolander: { min: 316, max: 360 },
        };
        return ranges[movie];
    }

    goButton.addEventListener("click", function () {
        rotateLightning();
        lightningSpin += 3600; // Increment lightningSpin every time the button is clicked
    });
});
