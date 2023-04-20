// querySelecto y querySelectorAll
//Hermanos menores
// con clases
const inputName = document.querySelector(".inputname")
console.log(inputName.value)

//esto es con ID
const input_password = document.querySelector("#input_password")
console.log(inputName.value)

//tagname
const form = document.querySelector("Form")

// esto en particular retorna un Modelist y este es compatible con for each

const inputs = document.querySelectorAll("input");
console.log(inputs)

//quiero filtrar e iterar con nodelist
const arrayInputsText=[];

inputs.array.forEach((input) => {
if(input.type === "text"){
    arrayInputsText.push(input);
}    
});
console.log(arrayInputsText)

