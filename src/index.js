//import './style.css';
//import bcImg from './background.jpg';

function createHeader() {
    const tabs = ['LOGO', 'HOME', 'HOURS & LOCATIONS', 'MENUS', 'ABOUT US'];

    const header = document.createElement('div');
    header.classList.add('header');

    for(let i=0 ; i<tabs.length; i++) {
        header.appendChild(createTab(tabs[i]));
    }

    const orderButton = document.createElement('button');
    orderButton.textContent = 'ORDER ONLINE';
    orderButton.classList.add('order-button');

    header.appendChild(orderButton);

    return header
}
function createTab (tabName) {
    const tab = document.createElement('a');
    tab.href = '#';
    tab.textContent = tabName;
    if(tabName === 'LOGO') {
        tab.textContent = 'HOT FLAVOR';
        tab.classList.add('logo');
    }
    tab.classList.add('links');

    return tab;
}

function createMain() {
    const main = document.createElement('div');
    main.classList.add('main');

    const intro = document.createElement('div');
    intro.setAttribute('style', 'white-space: pre;');
    intro.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing \r\n elit. Eaque, debitis';
    intro.classList.add('intro');
    
    main.appendChild(intro);

    return main;
}

const content = document.getElementById('content');

content.appendChild(createHeader());
content.appendChild(createMain());