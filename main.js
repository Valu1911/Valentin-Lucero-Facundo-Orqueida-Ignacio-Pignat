const toilet = document.getElementById("skibidi");
const hamb = document.getElementById("hamburger");

hamb.addEventListener("mouseenter", () => {
  toilet.classList.remove("hidden");
});

hamb.addEventListener("mouseout", () => {
  toilet.classList.add("hidden");
});
