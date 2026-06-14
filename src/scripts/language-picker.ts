const pickers = document.querySelectorAll(".language-picker");
pickers.forEach((picker) => {
  picker.addEventListener("click", (e) => {
    const link = (e.target as HTMLElement).closest("a");
    if (link && link.dataset.lang) {
      localStorage.setItem("language", link.dataset.lang);
    }
  });
});
