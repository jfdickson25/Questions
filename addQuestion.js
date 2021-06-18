document.querySelector('.addQuestionBtn').addEventListener('click', () => {
    const question = {
        question: document.querySelector('#question').value
    }

    fetch('https://dicksonquestions.herokuapp.com/', {
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