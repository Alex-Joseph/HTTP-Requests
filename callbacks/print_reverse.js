var getHTML = require('../https-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function print (html) {
  console.log(getHTML.split("").reverse().join(""));
};

getHTML(requestOptions, print);
