
let data = document.querySelector(".one")
let data2 = document.querySelector(".two")
let btn = document.querySelector("button")
let result = document.querySelector("p")



btn.addEventListener("click", function(){
   if(data.value >= 18){
    result.innerHTML = "Biye koro"
    result.style.color = "green"
    result.style.fontSize = "32px"
    if(data2.value > 18000){
          result.innerHTML = "all right"
    }else{
        result.innerHTML = "cancel"
    }

   }else{
     result.innerHTML = "Paknami kom koro"
       result.style.color = "red"
   }
})


// array

let students = [ "alom", "joba", "sheli", "chapa", "beli"];

students.map( function (data){
    console.log(data)
})

let myStudent = [
    {
        name:"farjana",
        age:32,
        roll:96,
        phone:01754628686,
    },
    {
        name:"shawon",
        age:32,
        roll:96,
        phone:01754628686,
    },
    {
        name:"sima",
        age:32,
        roll:96,
        phone:01754628686,
    },

]

myStudent.map((studentData) =>{
    console.log(studentData.name)
    console.log(studentData.roll)
})
