
const rp = require('request-promise');
const url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States';

rp(url)
  .then(function(html){
    //success!
    let test = ["hi"]
    console.log(html);
    console.log(test);
  })
  .catch(function(err){
    //handle error
  });

 