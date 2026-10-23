const pic = document.querySelector(".pic");

if (pic) {
    pic.addEventListener("mouseenter", () => {
        pic.classList.add("is-hovered");
    });

    pic.addEventListener("mouseleave", () => {
        pic.classList.remove("is-hovered");
    });
}