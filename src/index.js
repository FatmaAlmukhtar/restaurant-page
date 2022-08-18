import {createHeader, createMain, updateMain} from './home';
import loadMenu from './menu';
import loadContact from './contact';

const content = document.getElementById('content');

content.appendChild(createHeader());
content.appendChild(createMain());

const tabs = document.querySelectorAll('.tabs');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const active = document.querySelector('.active');
        active.classList.remove('active');
        tab.classList.add('active');
        switch(tab.textContent) {
            case 'HOME':
                updateMain();
                break;
            case 'MENUS':
                loadMenu();
                break;
            case 'CONTACT US':
                loadContact();
                break;
            case 'ORDER ONLINE':
                break;
            default:
        }
    });
});