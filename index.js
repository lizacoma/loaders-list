const list = document.querySelectorAll(".list-item");

let i = 0;

setTimeout(function flipLoader() {
    list[i].classList.add("flip");
    i++;
    setTimeout(flipLoader, 1000);
}, 1000);

