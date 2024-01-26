document.addEventListener('DOMContentLoaded', function () {
    // Get the button and arrow elements
    const goButton = document.querySelector(".goButton");
    var arrow = document.querySelector("#arrow");

    // Function to rotate the arrow
    function rotateArrow() {
        let randomRotation = Math.floor(Math.random() * 360);
        console.log(randomRotation);
        arrow.style.transform = "rotate(" + randomRotation + "deg)";
    }

    // Click event for the "Start" button
    goButton.addEventListener('click', function () {
        rotateArrow();
    });
});



//     // Function to change arrow color based on rotation
//     function changeArrowColor(finalRotation) {
//         var arrowColor;

//         if (finalRotation >= 0 && finalRotation <= 45) {
//             arrowColor = "red";
//         } else if (finalRotation > 45 && finalRotation <= 90) {
//             arrowColor = "green";
//         } else if (finalRotation > 90 && finalRotation <= 135) {
//             arrowColor = "blue";
//         } else if (finalRotation > 135 && finalRotation <= 180) {
//             arrowColor = "yellow";
//         } else if (finalRotation > 180 && finalRotation <= 225) {
//             arrowColor = "purple";
//         }  else if (finalRotation > 225 && finalRotation <= 270) {
//             arrowColor = "pink";
//         } else if (finalRotation > 270 && finalRotation <= 315) {
//             arrowColor = "black";
//         }  else if (finalRotation > 315 && finalRotation <= 360) {
//             arrowColor = "orange";
//         }

//         arrow.style.backgroundColor = arrowColor;
//     }
