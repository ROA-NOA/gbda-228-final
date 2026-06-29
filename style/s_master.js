//Click detection for homepage project panels
const projectPanels = document.querySelectorAll(".projectPanel");

projectPanels.forEach((panel) => {
    panel.addEventListener("click", () => {
        removeActiveClasses();
        panel.classList.add("active");
    });
});

const removeActiveClasses = () => {
    projectPanels.forEach((panel) => {
        panel.classList.remove("active");
    });
};


/* BUGGED: script not getting called for some reason? Will return when more awake.*/
const pageTransition = document.querySelectorAll("a");

pageTransition.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        removeTransitionClass();
        document.body.classList.add("page_close");
        setTimeout(() => {
                window.location.href = link.href;
        }, 1000); // Match CSS transition duration

    });
});

const removeTransitionClass = () => {
        document.body.classList.remove("page_mask_horiz");
};
