function createHeader() {
    const tabs = ['HOME', 'MENUS', 'CONTACT US', 'ORDER ONLINE'];

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
    if(tabName === 'HOME') tab.classList.add('active');
    return tab;
}

function createMain() {
    const main = document.createElement('div');
    main.classList.add('main');

    const intro = document.createElement('div');
    const heading1 = document.createElement('h3');
    const content1 = document.createElement('p');
    heading1.textContent = 'WHO?';
    content1.textContent = "HOT FLAVOR has the best food! Tasty and Affordable" +
     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus debitis iure magni optio aliquid? Asperiores voluptate, tempore laboriosam perspiciatis qui doloribus iure dignissimos porro error nemo illum minus ab maxime!";
    intro.classList.add('page-content');
    intro.appendChild(heading1);
    intro.appendChild(content1);


    const info = document.createElement('div');
    const heading2 = document.createElement('h3');
    const content2 = document.createElement('p');
    heading2.textContent = 'HOURS & LOCATIONS';
    content2.setAttribute('style', 'white-space: pre;');
    content2.textContent = '123 Casa Ave, Redwood City, CA \r\n Monday - Wednesday: 11am - 10pm \r\n Thursday - Sunday: 11am - 11pm';
    info.classList.add('page-content');
    info.appendChild(heading2);
    info.appendChild(content2);
    
    main.appendChild(intro);
    main.appendChild(info);

    return main;
}
function updateMain() {
    const main = document.querySelector('.main');
    
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }

    const intro = document.createElement('div');
    const heading1 = document.createElement('h3');
    const content1 = document.createElement('p');
    heading1.textContent = 'WHO?';
    content1.textContent = "HOT FLAVOR has the best food! Tasty and Affordable" +
     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus debitis iure magni optio aliquid? Asperiores voluptate, tempore laboriosam perspiciatis qui doloribus iure dignissimos porro error nemo illum minus ab maxime!";
    intro.classList.add('page-content');
    intro.appendChild(heading1);
    intro.appendChild(content1);


    const info = document.createElement('div');
    const heading2 = document.createElement('h3');
    const content2 = document.createElement('p');
    heading2.textContent = 'HOURS & LOCATIONS';
    content2.setAttribute('style', 'white-space: pre;');
    content2.textContent = '123 Casa Ave, Redwood City, CA \r\n Monday - Wednesday: 11am - 10pm \r\n Thursday - Sunday: 11am - 11pm';
    info.classList.add('page-content');
    info.appendChild(heading2);
    info.appendChild(content2);
    
    main.appendChild(intro);
    main.appendChild(info);
}

export {createHeader, createMain, updateMain};
