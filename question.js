document.querySelector('.questionBtn').addEventListener('click', () => {
    document.querySelector('.question').innerHTML = '';
    fetch('https://dicksonquestions.herokuapp.com/')
    .then(response => response.json())
    .then(data => {
        document.querySelector('.question').innerHTML = data;
    });
});



function getFirstQuestion() {
    document.querySelector('.question').innerHTML = '';
    fetch('https://dicksonquestions.herokuapp.com/')
    .then(response => response.json())
    .then(data => {
        document.querySelector('.question').innerHTML = data;
    });
}