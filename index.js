let wrapper = document.querySelector('.wrapper');
let passwordOutput = document.querySelectorAll('#passwordOutput');
let btnGeneratePassword = document.querySelector('.generate-button');
let topButtons = document.querySelector('.top-buttons')
let btnSettings = document.querySelector('.settings-button');
let btnSpecialCharacters = document.querySelector('.special-characters-button');
let btnPlus = document.querySelector('.plus-button');
let btnMinus = document.querySelector('.minus-button');
let imgSettings = document.querySelector('.img-settings');
let imgGraySettings = document.querySelector('.gray-img-settings');
let imgSpecialCharacters = document.querySelector('.img-special-characters');
let imgGraySpecialCharacters = document.querySelector('.gray-img-special-characters');
let imgCopy = document.querySelector('.copy-img');

let symbols = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ];   

let specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '?', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '?', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '?', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];

function random(num1, num2) {
    return Math.round(Math.random() * (num2-num1) + num1);
};

let i = 8;

function generatePassword() {
    let result = '';
    while (result.length < i) {
        result += symbols[random(0, symbols.length - 1)];
    };
    return result;
};

btnGeneratePassword.onclick = function clickGeneratePasswordBtn() {
    passwordOutput.forEach(element => {
        element.style.color = '#a1d6e2';
        element.style.padding = '10px 26px';

        let elemInner = element.innerText = generatePassword();
        if (window.innerWidth > 1024) {
            element.onmouseover = () => {
                element.innerHTML = elemInner + '<img class="copy-img" src="img/copy_icon.svg" alt="copy icon" width="16px">';
                element.style.padding = '10px 13px';
            };
            element.onmouseout = () => {
                element.innerHTML = elemInner;
                element.style.padding = '10px 26px';
            };  
            element.onclick = () => {
                navigator.clipboard.writeText(element.textContent); 
                element.style.color = '#1995ad';
                element.innerHTML = 'Copied <img src="img/tick_icon.svg" alt="✓" width="16px">';
                element.style.padding = '10px 22.6px';
                element.onclick = null;     
                element.onmouseover = null;
                element.onmouseout = null;
            };
        } else {
            element.onclick = () => {
                navigator.clipboard.writeText(element.textContent); 
                element.style.color = '#1995ad';
                element.innerHTML = 'Copied <img src="img/tick_icon.svg" alt="✓" width="16px">';
                element.style.padding = '10px 22.6px';
                element.onclick = null;     
                element.onmouseover = null;
                element.onmouseout = null;
            };
        };
    });
};

let settingsCondition = true;

btnSettings.onclick = () => {
    if (settingsCondition) {
        topButtons.classList.add('d-flex');
        btnSpecialCharacters.classList.add('d-block');
        btnSettings.style.border = '1px solid #bcbabe';
        imgSettings.style.display = 'none';
        imgGraySettings.style.display = 'block';
    } else {
        topButtons.classList.remove('d-flex');
        btnSpecialCharacters.classList.remove('d-block');
        btnSettings.style.border = '1px solid #1995ad';
        imgSettings.style.display = 'block';
        imgGraySettings.style.display = 'none';
    };
    settingsCondition = !settingsCondition;
};

let specialCharactersCondition = true;

btnSpecialCharacters.onclick = () => {
    if (specialCharactersCondition) {
        symbols.push(...specialCharacters);
        btnSpecialCharacters.style.border = '1px solid #bcbabe';
        imgSpecialCharacters.style.display = 'none';
        imgGraySpecialCharacters.style.display = 'block';
    } else {
        symbols.splice(-specialCharacters.length);
        btnSpecialCharacters.style.border = '1px solid #1995ad';
        imgSpecialCharacters.style.display = 'block';
        imgGraySpecialCharacters.style.display = 'none';
    };
    specialCharactersCondition = !specialCharactersCondition;
};

btnPlus.onclick = () => {
    if (i < 20) {
        i++;
        passwordOutput.forEach(element => {
            element.textContent = '.'.repeat(i);
            element.style.color = '#a1d6e2';
            element.onclick = null;
            element.onmouseover = null;
            element.onmouseout = null;
        });
    };
};

btnMinus.onclick = () => {
    if (i > 8) {
        i--;
        passwordOutput.forEach(element => {
            element.textContent = '.'.repeat(i);
            element.style.color = '#a1d6e2';
            element.onclick = null;
            element.onmouseover = null;
            element.onmouseout = null;
        });
    };
};

