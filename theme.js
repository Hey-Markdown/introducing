const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;
const themeIcon = themeToggle.querySelector('i');

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    themeIcon.classList.toggle('bx-moon');
    themeIcon.classList.toggle('bx-sun');
});