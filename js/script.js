
const input = document.getElementById('link-input');
const linkForm = document.getElementById('link-form');
const errMsg = document.getElementById('error');
const btn = document.getElementById('btn');
const menu = document.getElementById('menu');
const lg = document.getElementById('closeLG');





btn.addEventListener('click', navToggle);

lg.addEventListener('click', navToggle);


// Toggle Mobile Menu

function navToggle() {
    btn.classList.toggle('open');
    menu.classList.toggle('flex');
    menu.classList.toggle('hidden');
}



linkForm.addEventListener('submit', formSubmit);



function formSubmit(e) {
    e.preventDefault()

    if (input.value === '') {
        errMsg.innerHTML = 'Please enter a link'
        input.style.borderColor = 'red';
    }
    else if (!validUrl(input.value)) {

        errMsg.innerHTML = 'Enter a valid'
        input.style.borderColor = 'red';

    }
    else {
        errMsg.innerHTML = '';
        input.classList.remove('border-red');
        alert('Success');
    }
}