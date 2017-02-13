var getHTML = require('../https-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function printUpperCase (html) {
  console.log(getHTML.toLowerCase());
};

getHTML(requestOptions, printUpperCase);
