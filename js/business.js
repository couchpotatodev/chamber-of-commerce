const requestURL = 'json/business.json';

/*const requestURL = 'https://github.com/couchpotatodev/chamber-of-commerce/blob/main/json/business.json';
var baguioBiz = document.querySelector('.cards');
*/
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const biz = jsonObject['business']; 




    

});