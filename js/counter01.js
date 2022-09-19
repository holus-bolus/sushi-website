//Find elements on a page
const buttonMinus = document.querySelector('[data-action="minus"]');
const buttonPlus = document.querySelector('[data-action="plus"]');
const counter01 = document.querySelector('[data-counter]');
//Add a listener to a minus button
buttonMinus.addEventListener('click', () => {
    if (parseInt(counter01.innerText) > 1) {
        counter01.innerText = --counter01.innerText;
    }
});
//Add a listener to a plus button
buttonPlus.addEventListener('click', () => {
    counter01.innerText = ++counter01.innerText;
});

