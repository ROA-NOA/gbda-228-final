const projectPanel = document.querySelectorAll(".projectPanel");

projectPanel.forEach((projectPanel) => {
    projectPanel.addEventListener("click", () => {
        removeActiveClasses();
        projectPanel.classList.add("active");
    });
});

const removeActiveClasses = () => {
    projectPanel.forEach((projectPanel) => {
        projectPanel.classList.remove("active");
    });
};