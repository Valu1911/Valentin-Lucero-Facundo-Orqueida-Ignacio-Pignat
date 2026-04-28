//alert("Valen, Nacho, Fafa");
//const dni = "48.371.946";
//let edad = 18;
//edad = 19;
//console.log(edad);
//alert("hola" + " " + usuario);

let DNI = prompt("Ingrese su DNI (sin puntos ni guiones)");
while (DNI.length < 8 || DNI.length > 8) {
  alert("DNI no válido, por favor ingrese un DNI de 8 dígitos");
  DNI = prompt("Ingrese su DNI (sin puntos ni guiones)");
}

let usuario = prompt("Ingrese su nombre");
while (usuario.length < 3) {
  alert(
    "Nombre no válido, por favor ingrese un nombre de al menos 3 caracteres",
  );
  usuario = prompt("Ingrese su nombre");
}

let apellido = prompt("Ingrese su apellido");
while (apellido.length < 3) {
  alert(
    "Apellido no válido, por favor ingrese un apellido de al menos 3 caracteres",
  );
  apellido = prompt("Ingrese su apellido");
}

let mail = prompt("Ingrese su correo electrónico");
while (mail.length < 5 || !mail.includes("@")) {
  alert(
    "Correo electrónico no válido, por favor ingrese un correo electrónico válido",
  );
  mail = prompt("Ingrese su correo electrónico");
}

let edad = prompt(usuario + " " + "ingrese su edad");
while (isNaN(edad) || edad < 18 || edad > 120) {
  alert("Edad no válida, por favor ingrese una edad entre 18 y 120");
  edad = prompt(usuario + " " + "ingrese su edad real");
}

alert("Bienvenido " + usuario + " " + apellido);
