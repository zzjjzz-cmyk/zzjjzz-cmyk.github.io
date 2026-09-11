const room = document.querySelector("#room-scene");

const aboutView = document.querySelector("#about-view");
const deskView = document.querySelector("#desk-view");

const characterButton =
    document.querySelector("#character-button");

const deskButton =
    document.querySelector("#desk-button");

const backButtons =
    document.querySelectorAll(".back-button");


characterButton.addEventListener("click", () => {

    gsap.to(room, {
        scale: 1.15,
        duration: 0.6,
        ease: "power2.inOut",
        onComplete: () => {

            room.style.display = "none";

            aboutView.classList.remove("hidden");

            gsap.from(aboutView, {
                opacity: 0,
                duration: 0.5
            });

        }
    });

});


deskButton.addEventListener("click", () => {

    gsap.to(room, {
        scale: 1.35,
        x: "-12%",
        y: "-8%",

        duration: 0.8,

        ease: "power3.inOut",

        onComplete: () => {

            room.style.display = "none";

            deskView.classList.remove("hidden");

            gsap.from(".book", {
                y: 60,
                opacity: 0,

                stagger: 0.12,

                duration: 0.6
            });

        }
    });

});


backButtons.forEach(button => {

    button.addEventListener("click", () => {

        aboutView.classList.add("hidden");
        deskView.classList.add("hidden");

        room.style.display = "block";

        gsap.set(room, {
            scale: 1,
            x: 0,
            y: 0
        });

    });

});