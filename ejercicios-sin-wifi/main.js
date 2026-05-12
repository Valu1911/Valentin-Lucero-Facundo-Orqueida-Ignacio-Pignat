const alumnos = [];
alumnos.push("facundo", "valentin", "ignacio", "juan", "lauti");
console.log("todos los alumnos:");
console.log(alumnos);
console.log(alumnos[0], alumnos[4]);
console.log(alumnos.length, "alumnos");
console.log("modificar nombre dependiendo posicion:");
alumnos[0] = "roman";
console.log(alumnos);
console.log("eliminar primer y ultimo alumno:");
alumnos.pop(0);
console.log(alumnos);
alumnos.shift(4);
console.log(alumnos);
alumnos.unshift("santi");
console.log(alumnos);
for (let index = 0; index < alumnos.length; index++) {
  const alumno = alumnos[index];
  alert(alumno);
}
console.log(alumnos);
console.log(alumnos.includes("VALENTIN".toLowerCase()));
console.log(alumnos.indexOf("valentin"));
