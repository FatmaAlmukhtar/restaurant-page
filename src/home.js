function createHeader() {
    const tabs = ['HOME', 'HOURS & LOCATIONS', 'MENUS', 'ABOUT US', 'ORDER ONLINE'];

    const header = document.createElement('div');
    header.classList.add('header');

    const logo = document.createElement('a');
    logo.textContent = 'HOT FLAVOR';
    logo.href = '#';
    logo.classList.add('logo');
    header.appendChild(logo);

    for(let i=0 ; i<tabs.length; i++) {
        header.appendChild(createTab(tabs[i]));
    }

    return header
}
function createTab (tabName) {
    const tab = document.createElement('button');
    tab.textContent = tabName;
    tab.classList.add('tabs');

    if(tabName === 'ORDER ONLINE') tab.classList.add('order-button');

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
function updateMain() {
    const main = document.querySelector('.main');
    
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }
    
    const intro = document.createElement('div');
    intro.setAttribute('style', 'white-space: pre;');
    intro.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing \r\n elit. Eaque, debitis';
    intro.classList.add('intro');
    
    main.appendChild(intro);
}

export {createHeader, createMain, updateMain};
