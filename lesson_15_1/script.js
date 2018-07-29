var name = document.getElementById("name");
var age = document.getElementById("age");
var check = document.getElementById("check");
var btn1 = document.getElementById("btn1");




function accessIsAllowed() {
    alert("Доступ разрешен");
    console.log("Доступ разрешен");
}

function chek() {
    if (age.value >= 18) {
        if (check.checked) {
            accessIsAllowed();
        }
        else {
          alert("Вы не подписаны на россылку");
        }
    }
    else{
            alert("Доступ запрещен вам нет 18 лет");
        }
}

btn1.addEventListener("click", chek);




