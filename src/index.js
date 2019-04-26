import A from './js/sum';
import b from './js/add';
import './css/style.css';
import './css/index.css';

console.log(A, b,'--');
// addImage.js
let smallImg = document.createElement('img');
// 必须 require 进来
smallImg.src = require('../static/head.png');
document.body.appendChild(smallImg);

// let bigImg = document.createElement('img')
// bigImg.src = require('../images/big.jpeg')
// document.body.appendChild(bigImg)

if (module.hot) {
	module.hot.accept('*.js', function() {
		console.log('Accepting the updated printMe module!');
		printMe();
	});
}
