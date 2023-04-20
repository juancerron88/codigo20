//como tengo 4 elementos con el tagname input esto será un array de inputs
const inputs = document.getElementsByTagName("Input")
console.log("estos son los elementos ", inputs)
//recordemos que input es un html colection pero para ser iterado debe ser convertido a un array normal
// vamos a usar el array.from va convertir collection en un array
const newInput = Array.from (inputs)
console.log("inputs ", inputs)
console.log("newinputs ", newInput)
// iteramos la variable inputs
//map
newInput.map((newInput)=>{
    console.log("newinputs ", newInput)
})
// Capturar el form
const form = document.getElementsByClassName("Formulario")
console.log("Formulario", form)
//acceder al boton

const button = document.getElementsByClassName('btn_registro')

//
const divContent=document.getElementsByTagName("div")
console.log("divContent", divContent);
const newDivContent = Array.from(divContent);
console.log(newDivContent)
newDivContent.forEach((element)=>{
    console.log(element)
})

//..........................................
const inputpassword=document.getElementById("input_password");
console.log(inputPassword)

//de que forma accedemos al value al elemento capturado
inputPassword.style.backgroundColor="#f01";
console.log(inputPassword.value)


const input2=document.querySelectorAll('input')
console.log("query",input2)

const inputlastname=document.getElementsByClassName("input_lastname")
console.log(inputlastname)
inputlastname[0].style.color="red";