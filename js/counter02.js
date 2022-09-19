window.addEventListener('click', (event) => {
    let counter;
    let counterWrapper;

    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
        counterWrapper = event.target.closest('.counter-wrapper');
        counter = counterWrapper.querySelector('[data-counter]');
    }
    if (event.target.dataset.action === 'plus') {
        counter.innerText = ++counter.innerText;
    }
    if (event.target.dataset.action === 'minus') {
        if (parseInt(counter.innerText) > 1) {
            counter.innerText = --counter.innerText;
        }
    }
},);