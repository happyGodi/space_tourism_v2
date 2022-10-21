//navbar
const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');
const navbar = document.querySelector('nav');
const preloaders = document.querySelectorAll('.preloader');
const cardOne = document.getElementById('one');
const cardTwo = document.getElementById('two');
const cardThree = document.getElementById('three');
const cardFour = document.getElementById('four');
const contentOne = document.getElementById('contentOne');
const contentTwo = document.getElementById('contentTwo');
const contentThree = document.getElementById('contentThree');
const contentFour = document.getElementById('contentFour');
const description = document.querySelector('.description');
const copyright = document.querySelector('.copyright');
const preloaderContent = document.querySelector('.preloader h3');

hamburger.addEventListener('click', () => {
    navLink.classList.toggle('expanded');
    links.forEach(link => {
        link.classList.toggle('fade');
    })
})
/*cardOne */
cardOne.addEventListener('mouseover', () => {
    contentOne.classList.add('shown');
});
cardOne.addEventListener('mouseleave', () => {
    contentOne.classList.remove('shown');
});
/*cardTwo */
cardTwo.addEventListener('mouseover', () => {
    contentTwo.classList.add('shown');
});
cardTwo.addEventListener('mouseleave', () => {
    contentTwo.classList.remove('shown');
});
/*cardThree */
cardThree.addEventListener('mouseover', () => {
    contentThree.classList.add('shown');
});
cardThree.addEventListener('mouseleave', () => {
    contentThree.classList.remove('shown');
});
/*cardFour */
cardFour.addEventListener('mouseover', () => {
    contentFour.classList.add('shown');
});
cardFour.addEventListener('mouseleave', () => {
    contentFour.classList.remove('shown');
});

window.addEventListener('load', () => {
    navbar.classList.toggle('shown');
    preloaders.forEach(preloader => {
        preloader.classList.toggle('done');
    });
    cardOne.classList.toggle('showOne');
    cardTwo.classList.toggle('showTwo');
    cardThree.classList.toggle('showThree');
    cardFour.classList.toggle('showFour');
    description.classList.toggle('loaded');
    copyright.classList.toggle('finished');
    preloaderContent.classList.toggle('gone');
});
