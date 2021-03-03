function mostrar()
{
  let nombre;
  let cursada;
  let sexo;
  let materias;
  let nota;
  let edad;
  let notaMax;
  let flag = 0;
  let promedioMax;

nombre = prompt("ingrese su nombre: ");

cursada = prompt("ingrese tipo de cursada libre/presencial/remota")
  while(cursada != "libre" && cursada != "presencial" && cursada != "remota"){
    cursada = prompt("error, ingrese tipo de cursada libre/presencial/remota")
  }

sexo = prompt("ingrese sexo femenino/masculino/no binario")
  while(sexo != "femenino" && sexo != "masculino" && sexo != "no binario"){
    sexo = prompt("error, ingrese sexo femenino/masculino/no binario")
  }

materias = parseInt(prompt("ingrese cantidad de materias: (entre 1 y 8"))
  while(materias < 1 || materias > 8 || isNaN(materia)){
    materias = parseInt(prompt("error, ingrese cantidad de materias: (entre 1 y 8"))
  }
nota = parseFloat(prompt("ingrese la nota promedio: (entre 0 y 10) "))
  while(nota <= 1 || nota >= 10 || isNaN(nota)){
    nota = parseFloat(prompt("error, ingrese la nota promedio: (entre 0 y 10) "))
  }

edad = parseInt(prompt("ingrese su edad: "))
  while(edad <1 || isNaN(edad)){
    edad = parseInt(prompt("error, ingrese su edad: "))
  }


  if (sexo != "masculino") {
    if (flag == 0) {
      flag = 1;
      notaMax = nota;
      promedioMax = nombre;
    } else if (maxProm < nota) {
      notaMax = nota;
      promedioMax = nombre;
    }
  }









}
