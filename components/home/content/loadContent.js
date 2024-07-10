fetch('components/home/content/content.html')
    .then(response => response.text())
    .then(data => {
        document.body.innerHTML += data;
    })
    .catch(error => console.error('Error loading navbar:', error));