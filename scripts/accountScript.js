var emailEl = document.querySelector('#email');
var phoneEl = document.querySelector('#whatsapp');
var nameEl = document.querySelector('#name');
var surnameEl = document.querySelector('#surname');
var xhr = new XMLHttpRequest();

var url = 'users.json';

xhr.open('GET', url);
xhr.send();

xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        var user = response.users[0];
        var whatsapp = user.phone_number;
        var email = user.email;
        var name = user.first_name;
        var surname = user.last_name;
        emailEl.value = email;
        phoneEl.value = whatsapp;
        nameEl.value = name;
        surnameEl.value = surname;
    }
};