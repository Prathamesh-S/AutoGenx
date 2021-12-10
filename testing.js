var budget;
var brand;
var year;
var budgetAmount;
var realAmount;

function getBudget() {
  var e = document.getElementById("budget");
  var strUser = e.options[e.selectedIndex].value;
  budget = strUser;
  console.log(budget);
  fetchData();
}

function getBrand() {
  var e = document.getElementById("brand");
  var strUser = e.options[e.selectedIndex].value;
  brand = strUser;
  console.log(brand);
  fetchData();
}
function getYear() {
  var e = document.getElementById("year");
  var strUser = e.options[e.selectedIndex].value;
  year = strUser;
  console.log(year);
  fetchData();
}

function fetchData() {
  fetch("https://private-0c7bf5-carsapi1.apiary-mock.com/cars")
    .then((res) => res.json())
    .then((data) => {
      const car_model = data
        .map((cars) => {
          budgetAmount = parseInt(budget);
          realAmount = parseInt(cars.price);
          selectedYear = parseInt(year);
          realYear = parseInt(cars.year);

          if (budgetAmount > realAmount) {
            if (brand == cars.make) {
              if (selectedYear == realYear) {
                return (
                  '<div class="car"> <img src="' +
                  cars.img_url +
                  ' "></img> <p> Car Price : ' +
                  cars.price +
                  "</p>" +
                  "<p> Car Company : " +
                  cars.make +
                  "</p>" + 
                  "<p> Car Year : " +
                  cars.year +
                  "</p>" +
                  "<p> Car Model :" +
                  cars.model +
                  "</p></div>"
                );
              }
            }
          } else {
          }
        })
        .join("");

      document
        .querySelector("#app")
        .insertAdjacentHTML("afterbegin", car_model);
    });
}
