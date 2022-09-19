function toggleCartStatus() {
    const cardWrapper = document.querySelector('.cart-wrapper');
    const orderForm = document.querySelector('#order-form');
    const cartEmptyBadge = document.querySelector('[data-cart-empty]');
    if (cartWrapper.children.length > 0) {
        cartEmptyBadge.classList.add('none');
        orderForm.classList.remove('none');
    } else {
        cartEmptyBadge.classList.remove('none');
        orderForm.classList.add('none');
    }
}