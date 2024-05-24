document.addEventListener('DOMContentLoaded', () => {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const messageDiv = document.getElementById('message');
    const buttonsDiv = document.querySelector('.buttons');

    yesBtn.addEventListener('click', () => {
        messageDiv.textContent = '¡Genial! La palabra clave es: AMOR';
    });

    noBtn.addEventListener('mouseover', () => {
        moveButton(noBtn, buttonsDiv);
    });

    noBtn.addEventListener('touchstart', () => {
        moveButton(noBtn, buttonsDiv);
    });

    function moveButton(button, container) {
        const offsetX = Math.random() * (container.clientWidth - button.offsetWidth);
        const offsetY = Math.random() * (container.clientHeight - button.offsetHeight);
        button.style.left = `${offsetX}px`;
        button.style.top = `${offsetY}px`;
    }
});
