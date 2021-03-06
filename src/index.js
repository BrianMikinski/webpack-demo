'use strict';

import _ from 'lodash';
import printMe from './print.js';

function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    var test = "hello world";
    //var nice ="";
    var testing = "";
    let newtest = "";

    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());


if (module.hot) {
    module.hot.accept('./index.js', function () {
        console.log('Accepting the updated index module!');
    })
}