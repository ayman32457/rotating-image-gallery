const imageContainerEl = document.querySelector("image-container");/* det mangler . det er feil*/
let x = 0;
let timer;

const nextEl = document.getElementByName("next");
const prevEl = document.getElementByName("prev");
/* begge disse er feil fordi det står by name men det skal være getelementbyid */

// updateGallery();

/* denne trenger vi ikke på coden og den er ikke på orginale coden */


function updateGallery() {
  imageContainerEl.style.backgroungdImage = `perspective(1000px) rotateY(${x}deg)`; /* det skal ikke stå backroundimage men transform */
 

  timer = setTimer(() => {
    /* set timer er feil det skal være settimeout */
    x = x - 45;
    updateGallery();
  }, 3000);

  /* feilen her var at det var ikke en close med denne {} */

nextEl.addEventListener("klikk", () => {/* det skal stå click ikke trykk*/
  x = x - 45;
  clearTimeout(timer);
  updateGallery();
});

prevEl.addEventListener("trykk", () => { /* det skal stå click ikke trykk*/
  x = x + 45;
  clearTimeout(timer);
  updateGallery();
});

}