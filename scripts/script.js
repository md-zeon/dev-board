const changeThemeBtn = document.getElementById("change-theme-btn");

changeThemeBtn.addEventListener("click", function() {
    const body = document.getElementById("body");
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    body.style.backgroundColor = randomColor;
});

const dateToday = document.getElementById("date-today");
const today = new Date().toDateString();
const weekday = today.slice(0, 3);
const date = today.slice(4);
dateToday.innerHTML = `
    ${weekday} ,<br>
    <span class="font-bold">
        ${date}
    </span>
`;

const completeButtons = document.getElementsByClassName("complete-btn");

for (const btn of completeButtons) {
    btn.addEventListener("click", function() {
        const cardTitle = btn.parentElement.parentElement.querySelector(".card-title").innerText;
        let totalTaskCompleted = getNumById("task-complete-count");
        let taskRemaining = getNumById("task-remaining");
        totalTaskCompleted++;
        taskRemaining--;
        alert("Board Updated Successfully");
        if (taskRemaining === 0) {
            alert("Congrats!!! You have completed all the current task");
        }
        changeValueById("task-complete-count", totalTaskCompleted);
        changeValueById("task-remaining", taskRemaining);
        btn.setAttribute("disabled", true);
    });
}