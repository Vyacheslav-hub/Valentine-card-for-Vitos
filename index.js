const left = document.getElementById('leftHalf');
const right = document.getElementById('rightHalf');

left.addEventListener('click', () => {
    left.classList.toggle('is-open');
});

right.addEventListener('click', () => {
    right.classList.toggle('is-open');
});
