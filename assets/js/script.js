// Task-1
// let paragraph = document.querySelector(".paragraph");

// paragraph.innerHTML = paragraph.innerText
//   .split(" ")
//   .map((word) =>
//     word.length > 8
//       ? `<span style="background-color:red"> ${word}</span>`
//       : word
//   )
//   .join(" ");

//   Task-2

// var link =document.createElement("a");
// link.href="https://getbootstrap.com/docs/4.6/getting-started/introduction/";
// link.target="blank";
// link.innerText="Please, Click here";
// link.style.color="red";
// link.style.backgroundColor="blue";
// link.style.textDecoration="none"
// link.style.marginLeft="20px";
// document.body.appendChild(link);


//   if(considition){
//       dogru
//   }else{
//       yanlish
//   }
//   condition ? dogrusu :yanlish;

// Task-3

// let inputOne=document.querySelector(".number1")
// let inputTwo=document.querySelector(".number2")

// let toplama =document.querySelector(".add");
// let cixma =document.querySelector(".diff");
// let vurma =document.querySelector(".multi");
// let bolme =document.querySelector(".div");
// let mod =document.querySelector(".mod");

// toplama.addEventListener("click",function(){
//     if( !(inputOne.value == "" && inputTwo.value=="")){

//         alert(parseInt(inputOne.value)  + parseInt(inputTwo.value ) )
//     }
//     else{
//         alert("Duzgun deil aa")
//     }
// })


// Task-4

// let colorinput=document.querySelector(".colorInput");
// let widthinput=document.querySelector(".widthInput");
// let box =document.querySelector(".box")
// let change=document.querySelector(".change");

// change.addEventListener("click",function(){
//     if(widthinput.value>0){
//         box.style.width=widthinput.value +"px"
//     }
// })

let cities=document.querySelectorAll(".cities li");


cities.forEach(element=>{
    element.addEventListener("click",function(){
        this.classList.toggle("active")
    })
})