let contador = 0;

let incrementButton = document.getElementById("increment");

let counterDisplay = document.getElementById("counter");

incrementButton.addEventListener("click", function () {
  if (contador < 10) {
    contador++;
    counterDisplay.textContent = contador;
  }
});
