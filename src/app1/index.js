import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import Root from './root.component.js';

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  domElementGetter,
});

let element;

export function bootstrap(props) {
  element = props.customProps.el
  return reactLifecycles.bootstrap(props);
}

export function mount(props) {
  element = props.customProps.el
  return reactLifecycles.mount(props);
}

export function unmount(props) {
  return reactLifecycles.unmount(props);
}

function domElementGetter() {

  if (element) {
    return element;
  } else {
    // Make sure there is a div for us to render into
    let el = document.getElementById('app1');
    if (!el) {
      el = document.createElement('div');
      el.id = 'app1';
      document.body.appendChild(el);
    }
    return el;
  }
}