document.querySelector('.questionBtn').addEventListener('click', () => {
    fetch('https://dicksonquestions.herokuapp.com/')
    .then(response => response.json())
    .then(data => {
        document.querySelector('.question').innerHTML = data;
    });
});

document.querySelector('.addQuestionBtn').addEventListener('click', () => {
    const question = {
        question: document.querySelector('#question').value
    }

    fetch('https://example.com/profile', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(question),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        document.querySelector('#question').value = '';
    })
    .catch((error) => {
    console.error('Error:', error);
    });

});



function getFirstQuestion() {
    fetch('https://dicksonquestions.herokuapp.com/')
    .then(response => response.json())
    .then(data => {
        document.querySelector('.question').innerHTML = data;
    });
}