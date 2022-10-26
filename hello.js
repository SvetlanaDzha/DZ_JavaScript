function hello() {
    let name = prompt("Введите ваше имя");
    if (name == null || name == "") {
        alert("Вы не ввели имя!");
    } else {
        alert(`Привет, ${name}! Добро пожаловать!`);
    }
}

window.addEventListener('load', function (event) {
    hello();
});