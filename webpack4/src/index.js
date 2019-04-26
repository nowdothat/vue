import _ from 'lodash'
import './style.css';
import Icon from './11.png';
import Data from './data.json'
import Data2 from './test.xml'

function component() {
  var element = document.createElement('div');

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  // element.innerHTML = _.join(['Hello', 'ken'], ' ');
  element.innerHTML ="&#xe612"
  element.classList.add('hello');
  var myImg = new Image()
  myImg.src = Icon
  element.appendChild(myImg)
  return element;
}
document.body.appendChild(component());
console.log(Data)
console.log(Data2)