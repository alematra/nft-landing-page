const halfVw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) / 2;
const atLeft = Array.from(document.getElementsByClassName("left"));
const atRight = Array.from(document.getElementsByClassName("right"));
document.addEventListener('mousemove', e => {
    const isLeft = e.clientX < halfVw;
    if (isLeft) {
        atLeft.forEach(x => x.classList.add("flip"));
        atRight.forEach(x => x.classList.remove("flip"));
    } else {
        atLeft.forEach(x => x.classList.remove("flip"));
        atRight.forEach(x => x.classList.add("flip"));
    }
});