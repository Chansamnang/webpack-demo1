import _ from 'lodash'
import printMe from './print';
import './style.css'

function component() {
    let element = document.createElement('div')
    let btn = document.createElement('button')

    element.innerHTML = _.join(['hello', 'webpack'], ' ')
    btn.innerHTML = 'hello world'
    btn.onclick = printMe

    element.appendChild(btn)
    return element
}
document.body.appendChild(component())
