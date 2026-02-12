const questionBox = document.getElementById('question-box');
const successBox = document.getElementById('success-box');
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');

yesBtn.addEventListener('click', () => {
    questionBox.classList.add('hidden');
    successBox.classList.remove('hidden');
});

const moveButton = () => {
    // This part handles the running away
    const maxWidth = window.innerWidth - noBtn.offsetWidth;
    const maxHeight = window.innerHeight - noBtn.offsetHeight;

    const randomX = Math.floor(Math.random() * maxWidth);
    const randomY = Math.floor(Math.random() * maxHeight);

    // KEY CHANGE: We set position to fixed ONLY when it moves
    noBtn.style.position = 'fixed';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
};

noBtn.addEventListener('mouseover', moveButton);
noBtn.addEventListener('touchstart', moveButton);