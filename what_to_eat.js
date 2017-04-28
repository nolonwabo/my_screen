var display = document.querySelector('.displayTemp').innerHTML;
var displayTemp = Handlebars.compile(display);
var textBox = document.querySelector('#input');
var firstName = '';
var surName = '';
var menu = document.querySelector('.menubtn');
var outPut2 = document.querySelector('.output2');

//var userInfo = document.querySelector('.userInfo');
//var userInfoTemp = Handlebars.compile(userInfo.innerHTML);

var meals = [
  {
    Price: 26.99,
    Picture: "img/ChickfilA-Spicy-Chicken-Sandwich.jpg"
  },
  {
      Price: 29.99,
      Picture: "img/small.png"
  },
  {
    Price: 49.99,
    Picture: "img/burger-menu.jpg"
  },
  {
    Price: 46.99,
    Picture: "img/sejarah-Hamburger.jpg"
  },
  {
    Price: 48.99,
    Picture: "img/mi-tummy-com-wp-content-uploads-lazy-dog-cafe-westminster-ca-lazy-dog-burger-and-fries-x-jpg-_u8mv.jpg"
  },
  {
    Price: 99.99,
    Picture: "img/hwy-55-burgers-shakes.jpg"
  },
  {
    Price: 89.99,
    Picture: "img/bkasia33698_background03.jpg"
  },
  {
    Price: 69.99,
    Picture: "img/BistroBurger-afa0d5b4.jpeg"
  },
  {
    Price: 24.99,
    Picture: "img/1408971580697.png"
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

//var person = [];
submitBotton.addEventListener('click', function() {

  var person = {};
  if (firstName.value !== undefined && lastName.value !== undefined) {
    person = {
      firstName: firstName.value,
      lastName: lastName.value
    };
  }

  var burgerPrices = [];
  for (var i = 0; i < meals.length; i++) {
    var myMeal = meals[i];
    var price = myMeal.Price;
    if (textBox.value >= myMeal.Price) {
      burgerPrices.push(myMeal)
    }
  }

  console.log(person);
  // var outputV = displayTemp({
  //   meals: burgerPrices,
  // });
  //
  // output.innerHTML = outputV;

  burgerPrices = burgerPrices.sort(function(b1, b2){
    return b1.Price - b2.Price;
  })


  document.querySelector('.output').innerHTML = displayTemp({
    meals: burgerPrices,
    person: person
  });

});
