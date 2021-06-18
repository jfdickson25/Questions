document.querySelector('.questionBtn').addEventListener('click', () => {
    fetch('https://dicksonquestions.herokuapp.com/')
    .then(response => response.json())
    .then(data => {
        document.querySelector('.question').innerHTML = data;
    });
});



function getFirstQuestion() {
    fetch('https://dicksonquestions.herokuapp.com/')
    .then(response => response.json())
    .then(data => {
        document.querySelector('.question').innerHTML = data;
    });
}