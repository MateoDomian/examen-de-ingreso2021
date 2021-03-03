
function mostrar()
{
	
	let productos;
	let precio;
	let cantidadU;
	let cantidadMax;
	let inflamable;
	let marca;
	let flag = 0;
	let flag2 = 0;
	let flag3 = 0;
	let flag4 = 0;
	let flag5 = 0;
	let flag6 = 0;
	let acumAlcohol = 0;
	let acumIac = 0;
	let acumQuat = 0;
	let contAlcohol = 0;
	let contIac = 0;
	let contQuat = 0;
	let acumExp = 0;
	let acumCom = 0;
	let acumIgn = 0;
	let acum200 = 0;
	let cantMax;
	let respuesta;
	let precioMax;
	let marcaMax;
	let promedioA;
	let promedioI;
	let promedioQ;
	
do{

		productos = prompt("ingrese su producto: alcohol/iac/quat").toLowerCase();
			while(productos != "alcohol" && productos != "iac" && productos != "quat"){
				productos = prompt("error, ingrese su producto alcohol/iac/quat");
			}

		precio = parseFloat(prompt("ingrese el precio de su producto (entre 100 y 300)"))
			while(precio <= 100 || precio >= 300 || isNaN(precio)){
				precio = parseInt(prompt("error, ingrese el precio de su producto (entre 100 y 300"))	
			}	
		
		cantidadU = parseInt(prompt("ingrese la cantidad de unidades (entre 1 y 1000)"))
			while(cantidadU < 1 || cantidadU > 1000){
				cantidadU = parseInt(prompt("error, ingrese la cantidad de unidades (entre 1 y 1000)"))
			}
		inflamable = prompt("ingrese el tipo de inflamable combustible/explosivo/ignifugo")
			while(inflamable != "combustible" && inflamable != "explosivo" && inflamable != "ignifugo"){
				inflamable = prompt("error, ingrese el tipo de inflamable combustible/explosivo/ignifugo")
			}
		marca = prompt("ingrese la marca del producto: ");


		if(productos == "alcohol"){
			if(flag == 0){
			acumAlcohol = acumAlcohol + cantidadU;
			precioMax = precio;
			marcaMax = marca;
			contAlcohol++;
			flag = 1;
			}else if(precioMax < precio){
			precioMax = precio;
			marcaMax = marca;
			}
		}

		if(productos == "iac"){
			if(flag5 == 0){
			acumIac = acumIac + cantidadU;
			precioMax = precio;
			marcaMax = marca;
			contAlcohol++;
			}else if(precioMax < precio){
				precioMax = precio;
				marcaMax = marca;
			}
		}

		if(productos == "quat"){
			acumQuat = acumQuat + cantidadU;
			contQuat++;
		}

		promedioA = contAlcohol / acumAlcohol;
		promedioI = contIac / acumIac;
		promedioQ = contQuat / acumQuat;



		if(inflamable == "combustible"){
			if(flag2 == 0){
				acumCom = acumCom + cantidadU;
				cantMax = acumCom;
				flag2 = 1;
			}else if(cantMax < acumCom){
				cantMax = acumCom;
			}
		}

		if(inflamable == "explosivo"){
			if(flag3 == 0){
				acumExp = acumExp + cantidadU;
				cantMax = acumExp;
				flag3 = 1;
			}else if(cantMax < acumExp){
				cantMax = acumExp;
			}
		}

		if(inflamable == "ignifugo"){
			if(flag4 == 0){
				acumIgn = acumIgn + cantidadU;
				cantMax = acumIgn;
				flag4 = 1;
			}else if(cantMax < acumIgn){
				cantMax = acumIgn;
			}
		}

		if(productos == "iac" || productos <= 200){
			acum200 = acum200 + cantidadU;
		}




		respuesta = prompt("quiere ingresar otro producto? si para continuar")
	}while(respuesta == "si");


console.log("a) el promedio de alcohol es: " + promedioA + " el promedio de iac es: " + promedioI + " el promedio de quat: " + promedioQ + "<br>")
console.log("b) el tipo de inflamable con mas cantidad de unidades es: " + cantMax + "<br>")
console.log("c) la cantidad de unidades de iac con precio menor a 200 es: " + acum200 + "<br>")
console.log("d) la marca de producto mas caro es de: " +  marcaMax + "el precio del producto mas caro es de: " + precioMax + "<br>")



}
