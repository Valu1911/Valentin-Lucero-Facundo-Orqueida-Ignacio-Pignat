const persona = {
  nombre: "Juan",
  edad: 30,
  hobbies: ["fútbol", "música", "viajar"],
  direccion: {
    calle: "Calle Principal",
    ciudad: "Baradero",
    codigoPostal: "2942",
  },
  idiomas: ["español", "inglés", "italiano"],
  notas: [9, 8, 7, 10, 6],
  contacto: {
    email: "juan@example.com",
    redesSociales: ["juan.fb", "juan.tw", "juan.ig"],
  },
  experiencias: [
    {
      empresa: "Empresa A",
      posicion: "Desarrollador",
      años: 2,
    },
    {
      empresa: "Empresa B",
      posicion: "Analista",
      años: 3,
    },
    {
      empresa: "Empresa C",
      posicion: "Gerente",
      años: 5,
    },
  ],
  mascotas: [
    {
      tipo: "perro",
      nombre: "Max",
      edad: 5,
    },
    {
      tipo: "gato",
      nombre: "Luna",
      edad: 3,
    },
  ],
};

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.direccion.ciudad);
console.log(persona.hobbies[1]);
console.log(persona.mascotas[0].nombre, persona.mascotas[0].tipo);

console.log(persona.experiencias.length);
console.log(persona.experiencias[0].empresa);
console.log(persona.experiencias[1].empresa);
console.log(persona.experiencias[2].empresa);
persona.hobbies.push("cocinar");
console.log(persona.hobbies);
