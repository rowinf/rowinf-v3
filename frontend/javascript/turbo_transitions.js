document.addEventListener("turbo:before-visit", (event) => {
    let main = document.querySelector("main");
    if (main.dataset.turboTransition == "false" || event.detail.url === location.href) {
        event.preventDefault();
        return;
    }
});

Turbo.setProgressBarDelay(600)