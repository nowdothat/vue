import printMe from './print.js';
import './styles.css';
import { cube } from './math.js';
function component() {
  var element = document.createElement('pre');
  element.innerHTML = [
    'hello ken',
    '5 cubed is equal to' + cube(5)
  ].join('\n\n');
  return element;
}
document.body.appendChild(component());
console.logg(111)
// if(module.hot) {
//   module.hot.accept('./print.js', function () { 
//     console.log('Accepting the updated printMe module')
//     printMe()
//    })
// }