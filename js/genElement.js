function genSlider() {
var boutonSlider =  document.querySelectorAll(".boutonSlider");
let sectionSlider = document.querySelector("slides");
console.log(boutonSlider);
console.log(sectionSlider);

for(let i=0; i<boutonSlider.length; i++){
    console.log(boutonSlider[i]);
    let imageSlider = document.createElement("div");
    imageSlider.id = "slide-" + (i + 1);
    sectionSlider.appendChild(imageSlider);
}
}