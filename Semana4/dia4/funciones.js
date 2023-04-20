function nombredelafuncion(){
    console.log("mi primera función")
    alert("mi primera función")
}

function sumar(numero1, numero2){
    const suma = numero1 + numero2;
    console.log("resultado", suma)
}
sumar(84,73)

// 3 Tipos de Funciones:
// Declarativas
    // Ejemplo: function suma (a,b,c){
    // return a+b+c
    //}
    //console.log (suma(10,10,10))

// expresiva o anónima:
    // Ejemplo: let  suma2 = function (a,b){
    //return a+b
    //}
    //console.log (suma2(10,10,10))

// función flecha (arrow):
    //Ejemplo: const suma3 = (x,y)=>{
    // return x+y
    //}

const saludar =(nombre, apellido)=>{
// return "Hola mi nombre es " +nombre + " y mi apellido es " + apellido;
return `hola mi nombre es ${nombre} y mi apellido es ${apellido}`
}
console.log(saludar("Juan","Cerrón"))
//................................................


const mostrarnombre=()=>{
    let elementonombre = document.getElementById('nombreusuario');
    let title = document.getElementById('reemplazo');
    let mensaje ="tu te llamas " + elementonombre.value;
    title.textContent = mensaje;
}
const mostrartexto=()=>{
    let elementonombre = document.getElementById('inputtexto');
    let title = document.getElementById('texto');
    let mensaje = "mi artista favorito es " + elementonombre.value;
    title.textContent = mensaje;
}
//......................................
const comenzaralarma=()=>{
    setTimeout(tiempocumplido, 1000 * 4);
}
const tiempocumplido=()=>{
    alert("se acabó el tiempo")
}
//...........................................
 let elementosegundos= document.getElementById("tiempoelegido");
 let elementotextoalarma=document.getElementById("textoalarma");
 let elementoapagado=document.getElementById("apagar");

 const comenzartiempo=()=>{
setTimeout(tiempocumplido2,1000*elementosegundos.value);
}

const tiempocumplido2=()=>{
    elementotextoalarma.textContent="Encendido";
    elementotextoalarma.style.color="green";
    return "tiempoelegido"
}
const apagar=()=>{
    elementotextoalarma.textContent="Apagado";
    elementotextoalarma.style.color="Red";
}