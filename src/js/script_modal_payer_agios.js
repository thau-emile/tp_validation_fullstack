/*fonction qui affiche le modal Payer mes agios  */
function displayModalPayerAgios(event) {
  document.querySelector(".modal_3").classList.add("show_modal_payer_agios");
}

/* fonction pour fermer le modal*/
function removeModal() {
  document.querySelector(".modal_3").classList.remove("show_modal_payer_agios");
}
document
  .querySelector(".button_payer_agios")
  .addEventListener("click", function (event) {
    displayModalPayerAgios();
  });
document.querySelector(".close").addEventListener("click", function (event) {
  removeModal();
});
