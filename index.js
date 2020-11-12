const button = document.querySelector('button');
const body = document.querySelector('body');
const hex = document.getElementById('hex');

const letterGenerator = () => {
    let max = 71;
    let min = 65;
    return Math.floor(Math.random() * (max - min) + min);
}

const numberGenerator = () => {
    let max = 10;
    let min = 0;
    return Math.floor(Math.random() * (max - min) + min);
}

const hexGenerator = () => {
    let color = [];
    for(let i = 0; i < 6; i++) {
    if(Math.random() > 0.6) {
        color.push(String.fromCharCode(letterGenerator()));
    } else {
        color.push(numberGenerator());
    }
   }
   return color.join('');
}

const hexChange = () => {
    const color = `#${hexGenerator()}`;
   body.style.background = `${color}`;
   hex.innerHTML = `HEX COLOR: ${color}`;
   button.style.setProperty('--button-color', `${color}`);
};

button.addEventListener('click', hexChange);

