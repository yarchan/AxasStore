let ratesSelector = document.getElementById("rates-selector");
let ratesBtns = document.querySelectorAll(".rates__item-link");
let ratesItemWidth = document.querySelector(".rates__item").clientWidth;
let ratesItemHeight = document.querySelector(".rates__item").clientHeight;
let headerDropBtn = document.getElementById("header-drop-btn");
let headerDrop = document.getElementById("header-drop");
let headerBottom = document.getElementById("header-bottom");
let headerTop = document.getElementById("header-top"); 
let standartCost = document.getElementById("standartCost")
let PremiumCost = document.getElementById("premiumCost")
let UltraCost = document.getElementById("ultraCost");
let standartCostStart = "19 900"
let PremiumCostStart = "39900"
let UltraCostStart = "59900"
ratesSelector.style.width = `${ratesItemWidth / ratesBtns.length}px`; 
ratesSelector.style.height = `${ratesItemHeight}px`; 

let arr=[]
let conditionHeader = true

headerDropBtn.addEventListener("click", () => {
  headerBottom.classList.toggle("open-drop");
  headerDrop.classList.toggle("drop-svg-transform");
  if (conditionHeader) headerTop.classList.add("header-white");
  else {
    setTimeout(() => {
      headerTop.classList.remove("header-white");
    }, 400);
  }
  conditionHeader = !conditionHeader;
});
window.addEventListener("click", () => {
  conditionHeader = !conditionHeader;
  if (!conditionHeader) {
    headerBottom.classList.remove("open-drop");
    headerDrop.classList.remove("drop-svg-transform");
    if (conditionHeader) headerTop.classList.remove("header-white");
    else {
      setTimeout(() => {
        headerTop.classList.remove("header-white");
      }, 400);
    }    
    conditionHeader = !conditionHeader;
  }
});

let calc = (el, arg) => {
  el = (
  (parseInt(el.replace(/\s+/g, "")) * arg).toString()).replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ');
  return el;
};

for (let i = 0; i <= ratesBtns.length-1; i++) {
  arr[i] = ratesBtns[i];
  arr[i].addEventListener("click", () => {
    
    try {
      let conditionCost = true
      for (let j = 0; j <= ratesBtns.length; j++) {
        if (ratesBtns[j].classList.contains("active")) {
          ratesBtns[j].classList.remove("active");
        }
        ratesBtns[i].classList.add("active");

        if (i == 1) {
          ratesSelector.style.transform = `translateX(${ratesItemWidth / ratesBtns.length * i}px)`;
          standartCost.innerText = calc(standartCostStart, 6) + " ₽";
          PremiumCost.innerText = calc(PremiumCostStart, 6) + " ₽";
          UltraCost.innerText = calc(UltraCostStart, 6) + " ₽";  
        } else if (i == 0) {
          standartCost.innerText = calc(standartCostStart, 1) + " ₽";
          PremiumCost.innerText = calc(PremiumCostStart, 1) + " ₽";
          UltraCost.innerText = calc(UltraCostStart, 1) + " ₽";
          ratesSelector.style.transform = `translateX(${ratesItemWidth * i}px)`;
        }
        if (i == 2 ) {
          if (conditionCost) {
            ratesSelector.style.transform = `translateX(${ratesItemWidth / ratesBtns.length * i}px)`;
            conditionCost = false;
            standartCost.innerText = calc(standartCostStart, 12) + " ₽";            
            PremiumCost.innerText = calc(PremiumCostStart, 12) + " ₽";            
            UltraCost.innerText = calc(UltraCostStart, 12) + " ₽";            
          }
        }
      }
    }catch{}
  });
};
