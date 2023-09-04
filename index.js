let newHeader = document.createElement('h1');

newHeader.id = 'victory';

newHeader.textContent = 'Jack is the champion';

let mainElement = document.querySelector('#main');
mainElement.remove();

document.body.appendChild(newHeader);