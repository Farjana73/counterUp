function openCity(e, name){
  let i, tabcontent, tablinks;
  tabcontent = document.querySelectorAll(".tabcontent");
  let myArr = Array.from(tabcontent)

  myArr.map((item) =>{
    item.style.display = "none";
  })

  tablinks = document.querySelectorAll(".tablinks");
  let tabArr = Array.from(tablinks)

  tabArr.map((item) =>{
    item.className = item.className.replace(" active", "");
  })

  document.getElementById(name).style.display = "block";
  e.currentTarget.className += " active";

  console.log(name)

}

  