let request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v3.1/all', true);
request.send();
request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    var countryData = JSON.parse(this.response);
    let people = countryData.filter((e) => {
      return e.population < 200000;
    });
    console.log(people);
  } else {
    console.log('Error: Unable to fetch data from the API');
  }
};