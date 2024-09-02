

let mainGalleryImg = document.getElementById("main-img");
const galleryImgs = document.getElementsByClassName("gallery-images");
let galleryImgsArr = Array.from(galleryImgs[0].children)
const imgsCount = galleryImgsArr.length

galleryLeft = document.getElementsByClassName("gallery__left")[0];
galleryRight = document.getElementsByClassName("gallery__right")[0];

galleryLeft.addEventListener("click", (event) => {
  console.log(`Left click count: ${event.detail}`)
});

galleryRight.addEventListener("click", (event) => {
  console.log(`Right click count: ${event.detail}`)
});

// console.log(galleryImgs[0].nextSibling)

console.log(galleryImgs[0].children)