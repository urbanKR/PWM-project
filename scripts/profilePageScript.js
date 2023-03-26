var nameSurnameEl = document.getElementById('name-surname');
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
        nameSurnameEl.textContent = name + ' ' + surname;
    }
};