let shirtViews = document.getElementsByClassName('item__views');
let baseShirt = document.getElementById("baseShirt");

Array.from(shirtViews).forEach(shirtView => {
  shirtView.addEventListener('mouseover', (event) => {
    const targetImg = event.target.closest('img');
    if (targetImg) {
      baseShirt.src = targetImg.src;
    }
  });
});
