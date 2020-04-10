const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".close");
cartButton.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);

function toggleModal() {
  modal.classList.toggle("active");
}
new WOW().init();
