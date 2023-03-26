
//Toggle Sidebar
const hMenu = document.querySelector("#h-menu")
const navBar = document.querySelector("nav")

hMenu.addEventListener("click", () => {
    hMenu.classList.toggle("open")
    navBar.classList.toggle("show-nav")
})

//Dynamic Loading of Users
var nameSurnameEl = document.getElementById('profile-txt');
var xhr = new XMLHttpRequest();

var url = 'users.json';

xhr.open('GET', url);
xhr.send();

xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        var user = response.users[1];
        var name = user.first_name;
        var surname = user.last_name;
        nameSurnameEl.textContent = name + ' ' + surname;
    }
};