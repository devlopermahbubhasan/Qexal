//  Window scroll sticky class add
function windowScroll() {
    const menu = document.getElementById("menu");
    if (
        document.body.scrollTop >= 50 ||
        document.documentElement.scrollTop >= 50
    ) {
        menu.classList.add("menu-sticky");
    } else {
        menu.classList.remove("menu-sticky");
    }
}

window.addEventListener('scroll', (ev) => {
    ev.preventDefault();
    windowScroll();
})
