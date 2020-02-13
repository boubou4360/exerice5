function genSlider() {
var tableauImg = ["1.jpg","2.jpeg","3.jpeg","4.jpeg","5.jpg"] 
var boutonSlider =  document.querySelectorAll(".boutonSlider");
let sectionSlider = document.querySelector(".slides");
console.log(boutonSlider);
console.log(sectionSlider);

for(let i=0; i<boutonSlider.length; i++){
    console.log(boutonSlider[i]);
    let imageSlider = document.createElement("div");
    imageSlider.id = "slide-" + (i + 1);
    sectionSlider.appendChild(imageSlider);
}
}