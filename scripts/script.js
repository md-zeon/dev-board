const changeThemeBtn = document.getElementById("change-theme-btn");

changeThemeBtn.addEventListener("click", function() {
    const body = document.getElementById("body");
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    body.style.backgroundColor = randomColor;
});

