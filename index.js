
let acc = document.querySelectorAll(".accordion");
let arr = Array.from(acc)
let i

arr.map((item) =>{
 item.addEventListener("click", function (){
    item.classList.toggle("active")
   let panel = item.nextElementSibling;
   if (panel.style.display === "block") {
    panel.style.display = "none";
  } else {
    panel.style.display = "block";
    panel.style.color = "blue"

  }
 })
})


  