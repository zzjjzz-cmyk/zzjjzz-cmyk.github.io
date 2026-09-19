const room = document.querySelector("#room-scene");
const aboutView = document.querySelector("#about-view");
const deskView = document.querySelector("#desk-view");
const characterButton = document.querySelector("#character-button");
const deskButton = document.querySelector("#desk-button");
const backButtons = document.querySelectorAll(".back-button");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
let transitioning = false;
let returnButton = characterButton;

function openView(view, trigger, transform) {
    if (transitioning || room.classList.contains("hidden")) return;
    transitioning = true;
    returnButton = trigger;

    const showView = () => {
        room.classList.add("hidden");
        aboutView.classList.toggle("hidden", view !== aboutView);
        deskView.classList.toggle("hidden", view !== deskView);
        transitioning = false;
        view.querySelector(".back-button").focus();
    };

    const animation = window.gsap;
    if (animation && !reduceMotion.matches) {
        animation.to(room, {
            ...transform,
            duration: 0.6,
            ease: "power2.inOut",
            onComplete: showView
        });
    } else {
        showView();
    }
}

characterButton.addEventListener("click", () => {
    openView(aboutView, characterButton, { scale: 1.15 });
});

deskButton.addEventListener("click", () => {
    openView(deskView, deskButton, { scale: 1.35, x: "-12%", y: "-8%" });
});

backButtons.forEach(button => {
    button.addEventListener("click", () => {
        const animation = window.gsap;
        if (animation) {
            animation.killTweensOf(room);
            animation.set(room, { clearProps: "transform" });
        }
        aboutView.classList.add("hidden");
        deskView.classList.add("hidden");
        room.classList.remove("hidden");
        transitioning = false;
        returnButton.focus();
    });
});

