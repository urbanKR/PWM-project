var nameSurnameEl = document.querySelector('#name-surname');
var descriptionEl = document.querySelector('#description-content');
var whatsAppEl = document.querySelector('#whatsapp-content');
var nationalityEl = document.querySelector('#nationality-content');
var xhr = new XMLHttpRequest();

var url = 'users.json';

xhr.open('GET', url);
xhr.send();

xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        var user = response.users[0];
        var name = user.first_name;
        var surname = user.last_name;
        var desc = user.description;
        var whatsApp = user.phone_number;
        var nationality = user.nationality;
        nameSurnameEl.textContent = name + ' ' + surname;
        descriptionEl.textContent = desc;
        whatsAppEl.textContent = whatsApp;
        nationalityEl.textContent = nationality;
    }
};