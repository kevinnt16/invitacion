document.addEventListener('DOMContentLoaded', () => {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const messageDiv = document.getElementById('message');

    yesBtn.addEventListener('click', () => {
        messageDiv.textContent = '¡Genial! La palabra clave es: SALCHIPAPA';
    });

    noBtn.addEventListener('mouseover', () => {
        const offsetX = Math.random() * (window.innerWidth - noBtn.offsetWidth);
        const offsetY = Math.random() * (window.innerHeight - noBtn.offsetHeight);
        noBtn.style.position = 'absolute';
        noBtn.style.left = `${offsetX}px`;
        noBtn.style.top = `${offsetY}px`;
    });

    noBtn.addEventListener('touchstart', () => {
        const offsetX = Math.random() * (window.innerWidth - noBtn.offsetWidth);
        const offsetY = Math.random() * (window.innerHeight - noBtn.offsetHeight);
        noBtn.style.position = 'absolute';
        noBtn.style.left = `${offsetX}px`;
        noBtn.style.top = `${offsetY}px`;
    });
});
