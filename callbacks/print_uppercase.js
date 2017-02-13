var getHTML = require('../https-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printUpperCase (html) {
  console.log(getHTML.toUpperCase());
};

getHTML(requestOptions, printUpperCase);
