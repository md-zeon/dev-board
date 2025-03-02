function getNumById(id) {
    const element = document.getElementById(id).innerText;
    const elementNum = Number(element);
    return elementNum;
}

function changeValueById(id, value) {
    document.getElementById(id).innerText = value;
}