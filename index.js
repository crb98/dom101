/*
 * This is index.js
 * Open index.html in your browser to check what
 * you have to do, adding functions to the end of this
 * file as necessary.
 *
 * NB: all code you write this year should use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

function replaceText(elem, str) {
    elem.textContent = str;
}

function addTextTo(elem, str) {
    elem.textContent += str;
}

function moreBears() {
    const animalsElement = document.getElementById('animals');
    animalsElement.src = 'http://placebear.com/400/200';
    animalsElement.alt = 'A bear.';
    animalsElement.title = 'A BEAR!';
}

function setId (elem, str) {
    elem.id = str;
    return elem;
}

function setClass(elem, str) {
    elem.className = str;
    return elem;
}

function addAClass(elem, str) {
    elem.classList.add(str);
    return elem;
}

function removeAClass(elem, str) {
    elem.classList.remove(str);
    return elem;
}

function newElement(name) {
    return document.createElement(name);
}

function findElementById(id) {
    return document.getElementById(id);
}

function findElementsByQuery(query) {
    return document.querySelectorAll(query);
}

function reverseList(query) {
    const list = document.querySelector(query);
    const items = Array.from(list.children).reverse();
    list.append(...items);
    return list;
}

function mover(moveThis, appendToThis) {
    const element = document.querySelector(moveThis);
    const target = document.querySelector(appendToThis);
    target.append(element);
    return element;
}

function filler(list, candidates) {
    for (const text of candidates) {
        const li = document.createElement('li');
        li.textContent = text;
        list.append(li);
    }

    return list;
}

function dupe(selector) {
    const element = document.querySelector(selector);
    const duplicate = element.cloneNode(true);
    element.parentElement.append(duplicate);
    return duplicate;
}

function removeAll(selector) {
    document.querySelectorAll(selector).forEach((element) => {
        element.remove();
    });
}

function getUserData() {
    return {
        name: document.getElementById('username').value,
        speed: Number(document.getElementById('speed').value),
        student: document.getElementById('student').checked,
    };
}