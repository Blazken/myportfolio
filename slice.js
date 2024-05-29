let list = document.querySelectorAll(".carousel .list .item");
let carousel = document.querySelector(".carousel");
let dots = document.querySelectorAll(".dots li");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

let lastPosition = list.length - 1;
let active = 0;
let zIndex = 2;

nextBtn.onclick = () =>{
    let newValue = active + 1 > lastPosition ? 0 : active + 1;
    setItemActive(newValue, showSlider);
}

prevBtn.onclick = () =>{
    let newValue = active - 1 < 0 ? lastPosition : active - 1;
    setItemActive(newValue, showSlider);
}

const setItemActive = (newValue, callbackFunction) =>{
    if(newValue === active) return;
    let tYpe = newValue > active ? "next" : "prev";
    active = newValue;
    callbackFunction(tYpe);
}
const showSlider = (type) =>{
     let itemActiveOld = document.querySelector(".carousel .list .item.active");
     if(itemActiveOld) itemActiveOld.classList.remove("active");
     zIndex++;
     list[active].style.zIndex = zIndex;
     list[active].classList.add("active");


     let dotActiveOld = document.querySelector(".dots li.active");
     if(dotActiveOld) dotActiveOld.classList.remove("active");
     dots[active].classList.add("active");
}