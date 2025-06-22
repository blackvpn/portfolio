const btnDark = document.querySelector('.dark-mode-btn');
const btnProject = document.querySelector(".btn");

btnProject.onclick = function () {
    document.querySelector('.section').scrollIntoView({ behavior: 'smooth' });
}




if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    btnDark.classList.add('dark-mode-btn--active');
    document.body.classList.add("dark");
}

if (localStorage.getItem('darkMode') === "dark") {
    btnDark.classList.add('dark-mode-btn--active');
    document.body.classList.add("dark");
} else if (localStorage.getItem('darkMode') === "light"){
    btnDark.classList.remove('dark-mode-btn--active');
    document.body.classList.remove("dark");
}

window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', (event) => {
    const newColor = event.matches ? "dark": "light";

    if (newColor === "dark") {
        btnDark.classList.add('dark-mode-btn--active');
        document.body.classList.add("dark");
    } else {
        btnDark.classList.remove('dark-mode-btn--active');
        document.body.classList.remove("dark");
    }
})


btnDark.onclick = function () {
    btnDark.classList.toggle('dark-mode-btn--active');
    const isDark = document.body.classList.toggle("dark");

    if (isDark) {
        localStorage.setItem("darkMode", "dark")
    } else {
        localStorage.setItem("darkMode", "light")
    }
}


