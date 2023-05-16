'use strict';
{
    const slider = document.getElementById('slider');
    slider.addEventListener('input', () => {
        const passwordLength = document.getElementById('password-length');

        passwordLength.textContent = slider.value;
    })
}