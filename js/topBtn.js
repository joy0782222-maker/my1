(() => {
    const goTopB = document.querySelector("#goTop");
    if (!goTopB) return;

    let isDragging = false;
    let didDrag = false;
    let startX, startY;
    let startLeft, startTop;

    const updateVisibility = () => {
        goTopB.classList.toggle("active", window.scrollY > 600);
    };

    goTopB.addEventListener("click", (event) => {
        if (didDrag) {
            event.preventDefault();
            didDrag = false;
            return;
        }

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    goTopB.addEventListener("pointerdown", (event) => {
        isDragging = true;
        didDrag = false;

        const rect = goTopB.getBoundingClientRect();
        startX = event.clientX;
        startY = event.clientY;
        startLeft = rect.left;
        startTop = rect.top;

        goTopB.style.left = `${startLeft}px`;
        goTopB.style.top = `${startTop}px`;
        goTopB.style.right = "auto";
        goTopB.style.bottom = "auto";
        goTopB.setPointerCapture(event.pointerId);
    });

    goTopB.addEventListener("pointermove", (event) => {
        if (!isDragging) return;

        const deltaX = event.clientX - startX;
        const deltaY = event.clientY - startY;
        if (Math.abs(deltaX) > 4 || Math.abs(deltaY) > 4) {
            didDrag = true;
        }

        const x = startLeft + deltaX;
        const y = startTop + deltaY;
        goTopB.style.left = `${Math.max(0, Math.min(x, window.innerWidth - goTopB.offsetWidth))}px`;
        goTopB.style.top = `${Math.max(0, Math.min(y, window.innerHeight - goTopB.offsetHeight))}px`;
    });

    const stopDragging = () => {
        isDragging = false;
    };

    goTopB.addEventListener("pointerup", stopDragging);
    goTopB.addEventListener("pointercancel", stopDragging);
    window.addEventListener("scroll", updateVisibility);
    updateVisibility();
})();