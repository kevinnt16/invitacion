document.addEventListener('DOMContentLoaded', () => {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const messageDiv = document.getElementById('message');
    const buttonsDiv = document.querySelector('.buttons');

    yesBtn.addEventListener('click', () => {
        messageDiv.textContent = '¡Genial! La palabra clave es: AMOR';
    });

    noBtn.addEventListener('mouseover', () => {
        const offsetX = Math.random() * (buttonsDiv.clientWidth - noBtn.offsetWidth);
        const offsetY = Math.random() * (buttonsDiv.clientHeight - noBtn.offsetHeight);
        noBtn.style.left = `${offsetX}px`;
        noBtn.style.top = `${offsetY}px`;
    });

    noBtn.addEventListener('touchstart', () => {
        const offsetX = Math.random() * (buttonsDiv.clientWidth - noBtn.offsetWidth);
        const offsetY = Math.random() * (buttonsDiv.clientHeight - noBtn.offsetHeight);
        noBtn.style.left = `${offsetX}px`;
        noBtn.style.top = `${offsetY}px`;
    });
});
