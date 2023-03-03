function displayModalPayerAgios(event) {
  document
    .querySelector(".overlay_modal_payer_agios")
    .classList.add("show_modal_payer_agios");
}
document
  .querySelector(".button_payer_agios")
  .addEventListener("click", function (event) {
    displayModalPayerAgios();
  });
