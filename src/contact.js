import mapImg from './location.png';

function loadContact() {
    const main = document.querySelector('.main');
    
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }

    const infoDiv = document.createElement('div');
    const phone = document.createElement('p');
    const email = document.createElement('p');
    phone.textContent = 'Phone: (650) 987-4321';
    email.textContent = 'Email: hotflavor@gmail.com';
    infoDiv.classList.add('contact-page', 'info');
    infoDiv.appendChild(phone);
    infoDiv.appendChild(email);

    main.appendChild(infoDiv);

    const mapImage = document.createElement('img');
    mapImage.src = mapImg;
    mapImage.classList.add('contact-page');

    main.appendChild(mapImage);
}

export default loadContact;