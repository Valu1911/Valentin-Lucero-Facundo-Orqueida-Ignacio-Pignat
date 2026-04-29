let contador = 0;

let incrementButton = document.getElementById("increment");
let decrementButton = document.getElementById("decrement");
let counterDisplay = document.getElementById("counter");

incrementButton.addEventListener("click", function () {
  if (contador < 10) {
    contador++;
    counterDisplay.textContent = contador;
  }
});

decrementButton.addEventListener("click", function () {
  if (contador > 0) {
    contador--;
    counterDisplay.textContent = contador;
  }
});
let incrementar2 = document.getElementById("increment2");
let decrementar2 = document.getElementById("decrement2");
let contador2 = 0;
let counterDisplay2 = document.getElementById("counter2");

incrementar2.addEventListener("click", function () {
  if (contador2 < 10) {
    contador2++;
    counterDisplay2.textContent = contador2;
  }
});

decrementar2.addEventListener("click", function () {
  if (contador2 > 0) {
    contador2--;
    counterDisplay2.textContent = contador2;
  }
});
