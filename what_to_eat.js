var display = document.querySelector('.displayTemp').innerHTML;
var displayTemp = Handlebars.compile(display);
var textBox = document.querySelector('#input');
var firstName = '';
var surName = '';
var menu = document.querySelector('.menubtn');
var outPut2 = document.querySelector('.output2');

//var userInfo = document.querySelector('.userInfo');
//var userInfoTemp = Handlebars.compile(userInfo.innerHTML);

var meals = [{
    Price: 29.99,
    Picture: "small.png"
  },
  {
    Price: 24.99,
    Picture: "1408971580697.png"
  },
  {
    Price: 26.99,
    Picture: "ChickfilA-Spicy-Chicken-Sandwich.jpg"
  },
  {
    Price: 49.99,
    Picture: "burger-menu.jpg"
  },
  {
    Price: 46.99,
    Picture: "sejarah-Hamburger.jpg"
  },
  {
    Price: 48.99,
    Picture: "mi-tummy-com-wp-content-uploads-lazy-dog-cafe-westminster-ca-lazy-dog-burger-and-fries-x-jpg-_u8mv.jpg"
  },
  {
    Price: 99.99,
    Picture: "hwy-55-burgers-shakes.jpg"
  },
  {
    Price: 89.99,
    Picture: "bkasia33698_background03.jpg"
  },
  {
    Price: 69.99,
    Picture: "BistroBurger-afa0d5b4.jpeg"
  }
]

menu.addEventListener('click', function() {

  document.querySelector('.output').innerHTML = displayTemp({
    meals: meals
  });
})

function checkMeal(burgerMeal) {
  return burgerMeal >= document.getElementById('input').value;
}
var output = document.querySelector('.output');
var submitBotton = document.querySelector('.submit');
var orderBtn = document.querySelector('.order');
var firstName = document.querySelector('.firstName');
var lastName = document.querySelector('.lastName');

var burgerPrices = [];
var person = [];
submitBotton.addEventListener('click', function() {
  console.log(firstName.value, lastName.value);
  if (firstName.value === undefined && lastName.value === undefined) {
    person.push({
      firstName: firstName.value,
      lastName: lastName.value
    })
  }
  for (var i = 0; i < meals.length; i++) {
    var myMeal = meals[i];
    var price = myMeal.Price;
    if (textBox.value >= myMeal.Price) {
      burgerPrices.push(myMeal)

    }

  }
console.log(person);
  var outputV = displayTemp({
    meals: burgerPrices,
    person: person
  });

  output.innerHTML = outputV;

  document.querySelector('.output').innerHTML = displayTemp({
    meals: burgerPrices
  });

});
