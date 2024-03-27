document.addEventListener("DOMContentLoaded", function () {
    const goButton = document.querySelector(".goButton");
    const lightning = document.querySelector("#lightning-container");
    const audioElements = {
        "starskyHutch": document.getElementById("wowStarsky"),
        "midnightInParis": document.getElementById("wowParis"),
        "cars": document.getElementById("wowCars"),
        "marleyAndMe": document.getElementById("wowMarley"),
        "shanghaiKnights": document.getElementById("wowKnights"),
        "weddingCrashers": document.getElementById("wowWedding"),
        "meetTheParents": document.getElementById("wowParents"),
        "zoolander": document.getElementById("wowZoolander")
    };

    function rotateLightning() {
        const randomRotation = Math.floor(Math.random() * 360);
        const lightningSpin = randomRotation + 3600;
        lightning.style.transform = "rotate(" + lightningSpin + "deg)";
        lightning.style.transform = "rotate(" + randomRotation + "deg)";

        lightning.addEventListener("transitionend", function () {
            playAudio(randomRotation);
        }, { once: true });
    }

    function playAudio(randomRotation) {
        for (const [movie, audio] of Object.entries(audioElements)) {
            const angleRange = getAngleRange(movie);
            if (randomRotation >= angleRange.min && randomRotation <= angleRange.max) {
                audio.play();
                break;
            }
        }
    }

    function getAngleRange(movie) {
        const ranges = {
            "starskyHutch": { min: 0, max: 45 },
            "midnightInParis": { min: 46, max: 90 },
            "cars": { min: 91, max: 135 },
            "marleyAndMe": { min: 136, max: 180 },
            "shanghaiKnights": { min: 181, max: 225 },
            "weddingCrashers": { min: 226, max: 270 },
            "meetTheParents": { min: 271, max: 315 },
            "zoolander": { min: 316, max: 360 }
        };
        return ranges[movie];
    }

    goButton.addEventListener("click", function () {
        rotateLightning();
    });
});

	// //OMDB API
	// var myAPIKey = "";
	// var url = "http://www.omdbapi.com/?apikey="+myAPIKey+"&";

	// //IMDBIds
	// var meetTheParents = "tt0212338";
	// var zoolander = "tt0196229";
	// var shanghaiKnights = "tt0300471";
	// var starskyHutch = "tt0335438";
	// var weddingCrashers = "tt0396269";
	// var cars = "tt0317219";
	// var marleyAndMe = "tt0822832";
	// var midnightInParis = "tt1605783";

	// var imdbId = [
	// 	meetTheParents,
	// 	zoolander,
	// 	shanghaiKnights,
	// 	starskyHutch,
	// 	weddingCrashers,
	// 	cars,
	// 	marleyAndMe,
	// 	midnightInParis,
	//   ];