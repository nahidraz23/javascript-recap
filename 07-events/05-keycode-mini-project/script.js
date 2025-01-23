const body = document.querySelector('body');

const onKeyPress = function (event) {
    document.querySelector('#div1').innerText = event.key === ' ' ? 'Space' : event.key;
    document.querySelector('#div2').innerText = event.keyCode;
    document.querySelector('#div3').innerText = event.code;
}

body.addEventListener('keypress', onKeyPress);