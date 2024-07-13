fetch('../components/cardexamples/cardexamples.html')
    .then(response => response.text())
    .then(data => {
        document.body.innerHTML += data;
    })
    .catch(error => console.error('Error loading head:', error));
