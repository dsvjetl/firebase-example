// scss
import './index.scss';

// js
import Base from './js/Base';
import $ from 'jquery'
import AddToFirebase from './js/AddToFirebase';
import GetDataFromFirebaseOnStart from './js/GetDataFromFirebaseOnStart';


// MODULE INITIALIZATIONS

const base = new Base();

// --- Add to database
const submitBtn = document.querySelector('#submitFirebase');
const inputTag = document.querySelector('#input-text');
const firebase = new AddToFirebase(submitBtn, inputTag);

// --- Get from database on start
const dataFillElement = document.querySelector('#object');
const getDataFromFirebaseOnStart = new GetDataFromFirebaseOnStart(dataFillElement, 'names');

