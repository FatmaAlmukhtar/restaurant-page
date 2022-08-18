import {createHeader, createMain, updateMain} from './home';
import loadMenu from './menu';


const content = document.getElementById('content');

content.appendChild(createHeader());
content.appendChild(createMain());

const tabs = document.querySelectorAll('.tabs');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        switch(tab.textContent) {
            case 'MENUS':
                loadMenu();
                break;
            case 'ABOUT US':
                break;
            default:
                updateMain();
        }
    });
});