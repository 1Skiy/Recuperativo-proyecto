'use strict';

const api_key = 'ea776958d49a67d6637894bbf5136b22';
const imageBaseURL = 'https://image.tmdb.org/t/p/';


const fetchDataFromServer = function (url, callback, optionalParam) {
  fetch(url)
    .then(response => response.json())
    .then(data => callback(data, optionalParam));
}

export { imageBaseURL, api_key, fetchDataFromServer };