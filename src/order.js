import {menu} from './menu';
import {updateMain} from './home';

let inputList = ['Order Name', 'Quantity', 'Add-On'];
let addon = ['Pickles', 'Cheese', 'Onions'];

function orderOnline() {
    const main = document.querySelector('.main');
    
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }

    const orderDiv = document.createElement('div');
    orderDiv.classList.add('orderTab');

    main.appendChild(orderDiv);

    const orderForm = document.createElement('form');
    orderForm.classList.add('orderForm');

    orderDiv.appendChild(orderForm);

    const cancelButton = document.createElement('button');
    cancelButton.classList.add('close-form');
    cancelButton.type = 'button';
    const cancelSpan = document.createElement('span');
    cancelSpan.classList.add('material-icons', 'close-form');
    cancelSpan.textContent = ' close ';
    cancelButton.appendChild(cancelSpan);
    cancelButton.addEventListener('click', updateMain);
    orderForm.appendChild(cancelButton);
    
    const title = document.createElement('legend');
    title.textContent = 'Make Online Order';
    orderForm.appendChild(title);

    inputList.forEach(element => {
        const newDiv = document.createElement('div');

        if(element === 'Order Name') {
            createDropdown(element, menu, newDiv);
            
        }
        else if(element === 'Add-On') {
            createDropdown(element, addon, newDiv);
        }
        else {
            const input = document.createElement('input');
            input.id = element;
            input.type = 'number';
            input.min = 1;
            input.max = 20;
            input.classList.add('inputField');
            const label = document.createElement('label');
            label.for = element;
            label.textContent = element;
            newDiv.appendChild(label);
            newDiv.appendChild(input);
        }
        
        orderForm.appendChild(newDiv);
    });

    const submitButton = document.createElement('button');
    submitButton.textContent = 'ORDER';
    submitButton.classList.add('submit');
    submitButton.type = 'button';
    submitButton.addEventListener('click', updateMain);
    orderForm.appendChild(submitButton);
}

function createDropdown(element, list, newDiv) {
    const input = document.createElement('select');
    input.id = element;
    input.classList.add('inputField');
    const label = document.createElement('label');
    label.for = element;
    label.textContent = element;

    const defaultOption = document.createElement('option');
    defaultOption.disabled = true;
    defaultOption.selected = true;
    input.appendChild(defaultOption);
    list.forEach(item => {
        const option = document.createElement('option');
        option.textContent = item;
        option.value = item;

        input.appendChild(option);
    })
    newDiv.appendChild(label);
    newDiv.appendChild(input);
}

export default orderOnline;

