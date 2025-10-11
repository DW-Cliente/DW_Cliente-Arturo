const div = document.querySelector(".caja");
div.addEventListener('click', () => {
    div.style.backgroundColor = div.style.backgroundColor ? '' : 'red';
});