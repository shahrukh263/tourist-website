document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".counter").forEach(function (counter) {
    var minusButton = counter.querySelector(".minus");
    var plusButton = counter.querySelector(".plus");
    var numberSpan = counter.querySelector(".number");

    minusButton.addEventListener("click", function () {
      var currentNumber = parseInt(numberSpan.textContent);
      if (currentNumber > 1) {
        numberSpan.textContent = currentNumber - 1;
      }
    });

    plusButton.addEventListener("click", function () {
      var currentNumber = parseInt(numberSpan.textContent);
      numberSpan.textContent = currentNumber + 1;
    });
  });
});
document.addEventListener('DOMContentLoaded', function() {
  var header = document.querySelector('header');

  window.addEventListener('scroll', function() {
    if (window.scrollY > 30) {
      header.style.backgroundColor = '#f7fbff';
    } else {
      header.style.backgroundColor = '#ffffff';
    }
  });
});
