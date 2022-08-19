let menu = ['SWEET SALSA    $5', 'CHEESE    $5', 'GUACAMOLE $5'];

function loadMenu() {
    const main = document.querySelector('.main');
    
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }

    const pageContent = document.createElement('div');
    pageContent.setAttribute('style', 'white-space: pre;');
    menu.forEach(element => {
        pageContent.textContent += `${element} \r\n`;
    });
    
    pageContent.classList.add('page-content');

    main.appendChild(pageContent);
}

export {loadMenu, menu};