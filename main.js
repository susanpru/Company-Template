//get jumbo__cta
const jumbo__cta = document.querySelector(".jumbo__cta");
const modal__content = document.querySelector(".modal__content");

jumbo__cta.addEventListener("click", showModal);
modal__content.addEventListener("click", hideModal);

//showModal
function showModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "block";
  console.log("modal clicked");
}
//hide modal
function hideModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
  console.log("modal clicked");
}
