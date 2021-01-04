//Svg Array
let svgs = ["Circle", "Rectangle", "Polygon", "Polyline", "Smile", "Frown", "Dog", "Cat", "Fish", "Phone", "Camera", "Gem"]

//Selection Simplify
const s = s => document.querySelector(s);

s(".open").addEventListener("click", () => {
    s(".nav-list").style = "right:0;";
  });
  


  s(".close").addEventListener("click", () => {
    s(".nav-list").style = "right:-26rem;";
  });

//Open the menu on click
if (s(".left")) {
  
  //Code for the home page image carousel
  const left = s(".left");
  const right = s(".right");

  const slider = s(".slider");

  const indicatorParent = s(".control ul");
  const indicators = document.querySelectorAll(".control li");
  let index = 0;

  indicators.forEach((indicator, i) => {
    indicator.addEventListener("click", () => {
      s(".control .selected").classList.remove("selected");
      indicator.classList.add("selected");
      slider.style.transform = "translateX(" + i * -25 + "%)";
      index = i;
    });
  });

  left.addEventListener("click", function() {
    index = index > 0 ? index - 1 : 0;
    s(".control .selected").classList.remove("selected");
    indicatorParent.children[index].classList.add("selected");
    slider.style.transform = "translateX(" + index * -25 + "%)";
  });

  right.addEventListener("click", function() {
    index = index < 4 - 1 ? index + 1 : 3;
    s(".control .selected").classList.remove("selected");
    indicatorParent.children[index].classList.add("selected");
    slider.style.transform = "translateX(" + index * -25 + "%)";
  });

  //Automate the slider

  let direction = "right";
  const decidedirection = () => {
    if (index === 3) {
      direction = "right";
      index = -1;
    }

    if (direction === "right") {
      right.click();
    } else {
      left.click();
    }
  };

  setInterval(decidedirection, 5000);
}

//Generate the UUID for the token system
const createUUIDToken = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};
const generateotoken = s(".original-token");
const generatentoken = s(".new-token");
const continuentoken = s(".continue-token");
const tokendisplay = s(".token-display");
let token = "";
if (generateotoken) {
  if (sessionStorage.id != undefined) {
    generateotoken.style.display = "none";
    generatentoken.style.display = "block";
    continuentoken.style.display = "block";
    tokendisplay.style.display = "block";
    tokendisplay.innerHTML = `
     <h2>
        Current Token
        </h2>
        
        <p class = "token-insert">
          ${sessionStorage.id}
          
        </p>
    `;
  }
  generateotoken.addEventListener("click", e => {
    token = createUUIDToken();
    sessionStorage.id = token;
    generateotoken.style.display = "none";
    generatentoken.style.display = "block";
    continuentoken.style.display = "block";
    tokendisplay.style.display = "block";
    tokendisplay.innerHTML = `
     <h2>
        Current Token
        </h2>
        
        <p class = "token-insert">
          ${sessionStorage.id}
          
        </p>
    `;
  });

  generatentoken.addEventListener("click", e => {
    token = createUUIDToken();
    sessionStorage.id = token;
    generateotoken.style.display = "none";
    generatentoken.style.display = "block";
    continuentoken.style.display = "block";
    tokendisplay.style.display = "block";
    tokendisplay.innerHTML = `
     <h2>
        Current Token
        </h2>
        
        <p class = "token-insert">
          ${sessionStorage.id}
          
        </p>
    `;
  });

  continuentoken.addEventListener("click", e => {
    window.location.href = `./download.html?id=${sessionStorage.id}`;
  });
}

if (s(".download")) {
  let url = this.window.location.href;
  let queryparam = url.split("?")[1];
  if (queryparam != undefined) {
    let id = queryparam.split("=")[1];

    if (id != sessionStorage.id) {
      s(".show").style.display = "none";
      s(".err").style.display = "flex";
    }
  } else {
    s(".show").style.display = "none";
    s(".err").style.display = "flex";
  }
}

const allitems = document.querySelectorAll(".each-item");
let counter = 0;
if (allitems) {
  allitems.forEach(allitems => {
    allitems.innerHTML = `
   <div class  = "each-item">
    <h3 class = "name">
    ${svgs[counter]}
    </h3>
   <img src = "svg-art/${counter+1}.svg"/>  
    <a  href="./svg-art/${counter+1}.svg" download="${svgs[counter]}" class = "download">Download <i class = "fas fa-download"></i></a>
              
   </div>
  `;
    
  counter+=1;
    if(counter===12) {
      counter = 0
   }
  });
}


