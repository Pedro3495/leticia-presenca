"use strict";
const modal = document.querySelector("#contact");
const phone = String(window.LETICIA_CONFIG?.whatsapp ?? "").replace(/\D/g, "");
const messages = {
  compra: "Olá, Leticia! Gostaria de consultar ingressos para um evento.",
  ajuda: "Olá, Leticia! Preciso de ajuda com meu ingresso.",
  organizador:
    "Olá, Leticia! Gostaria de conversar sobre a gestão de ingressos do meu evento.",
};
document.querySelectorAll("[data-contact]").forEach((button) => {
  button.addEventListener("click", () => {
    const intent = button.dataset.buyer || "organizador";
    if (/^\d{10,15}$/.test(phone)) {
      window.location.assign(
        "https://wa.me/" +
          phone +
          "?text=" +
          encodeURIComponent(messages[intent]),
      );
      return;
    }
    modal.querySelector("h2").textContent =
      intent === "compra"
        ? "Vamos encontrar seu ingresso."
        : intent === "ajuda"
          ? "Vamos resolver seu ingresso."
          : "Seu próximo evento começa aqui.";
    modal.showModal();
  });
});
document
  .querySelector("#dismiss")
  .addEventListener("click", () => modal.close());
modal.addEventListener("click", (event) => {
  if (event.target !== modal) return;
  const bounds = modal.getBoundingClientRect();
  if (
    event.clientX < bounds.left ||
    event.clientX > bounds.right ||
    event.clientY < bounds.top ||
    event.clientY > bounds.bottom
  )
    modal.close();
});
