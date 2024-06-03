function loadContent(url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading content:', error);
        });
}

function navigateTo(url){
    window.location.href = url;
}

function switchBackground() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        body.style.backgroundColor = 'var(--dark-bg)';
    } else {
        body.style.backgroundColor = 'var(--light-bg)';
    }
}