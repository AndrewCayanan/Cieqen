const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
});

navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
});

const navLink = document.querySelectorAll('.nav-link');

const linkAction = () => {
    navMenu.classList.remove('show-menu');
};

navLink.forEach(n => n.addEventListener('click', linkAction));
