const container = document.getElementById("vibe-container");
const nextBtn = document.getElementById("vibe-next");
const prevBtn = document.getElementById("vibe-prev");

if (container && nextBtn && prevBtn) {
  nextBtn.addEventListener("click", () => {
    container.scrollBy({ left: 400, behavior: "smooth" });
  });
  prevBtn.addEventListener("click", () => {
    container.scrollBy({ left: -400, behavior: "smooth" });
  });
}
