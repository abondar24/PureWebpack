import './index.html';
import './index.scss';
import { mult, sum } from './modules/calc'
import logo from './img/logo.png';

console.log(mult(5, 8));
console.log(sum(5, 8));

const img = new Image();
img.src = logo;
img.width = 300;
const imgWrap = document.querySelector('.img');
imgWrap.append(img);