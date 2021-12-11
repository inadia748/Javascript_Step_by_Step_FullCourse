// traversing DOM tree

const rootNode = document.getRootNode();
console.log(rootNode);

console.log(rootNode.childNodes);


const htmlElementNode = rootNode.childNodes[0];
console.log(htmlElementNode);

console.log(htmlElementNode.childNodes);

const headElementNode = htmlElementNode.childNodes[0];
console.log(headElementNode);

const textElementNode = htmlElementNode.childNodes[1];
console.log(textElementNode);

const bodyElementNode = htmlElementNode.childNodes[2];
console.log(bodyElementNode);

console.log(headElementNode.parentNode);

console.log(headElementNode.nextSibling);

console.log(headElementNode.nextElementSibling);

console.log(headElementNode.childNodes);



const h1 = document.querySelector('h1');
console.log(h1);

console.log(h1.parentElement);
console.log(h1.parentNode);

const h1sParent = h1.parentNode;

h1sParent.style.backgroundColor = 'purple';
h1sParent.style.color = 'white';


const body = h1.parentNode.parentNode;
body.style.backgroundColor = 'green';

const bodyWay = document.body;
console.log(bodyWay);


const headWay = document.querySelector('head');
console.log(headWay);

console.log(headWay.querySelector('title'));

const title = headWay.querySelector('title');
console.log(title);

console.log(title.childNodes);

const container = document.querySelector('.container');
console.log(container.children);

