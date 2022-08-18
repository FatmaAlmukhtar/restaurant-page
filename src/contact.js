function loadContact() {
    const main = document.querySelector('.main');
    
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }

    const pageContent = document.createElement('div');
    pageContent.setAttribute('style', 'white-space: pre;');
    pageContent.textContent = "HOT FLAVOR has the best food! \r\n Tasty and Affordable";
    
    const someIntro = document.createElement('p');
    someIntro.textContent =  "pers"
    pageContent.appendChild(someIntro);
    pageContent.classList.add('page-content');

    main.appendChild(pageContent);
}

export default loadContact;