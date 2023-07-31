var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", true);
request.responseType = 'json';
request.send();

request.onload = () => {
  const data = request.response;
  const filteredData = data.filter((item) => item?.currencies?.USD).map((value) => value.name);
  console.log("filteredData", filteredData);
}
