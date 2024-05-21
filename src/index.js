import {homeHeader, homeImg, homeText} from './home_page';
import './style.css';

const homeButton = document.getElementById('home');
const menuButton = document.getElementById('menu');
const aboutButton = document.getElementById('about');
const contentDiv = document.getElementById('content');

homeButton.addEventListener('click', () => {
    contentDiv.innerHTML = '';
    contentDiv.append(homeHeader(), homeImg(), homeText());
});

menuButton.addEventListener('click', () => {
    contentDiv.innerHTML = '';
});

aboutButton.addEventListener('click', () => {
    contentDiv.innerHTML = '';
});
