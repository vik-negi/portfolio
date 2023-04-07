//LOADER FUNCTION

//HEADER TOGGLE FUNCTION

const header = document.querySelector(".header");

function toggleNav() {
  const sections = document.querySelectorAll("section, footer");

  header.classList.toggle("active");

  header.classList.contains("active")
    ? sections.forEach((section) => {
        section.addEventListener("click", toggleNav);
      })
    : sections.forEach((section) => {
        section.removeEventListener("click", toggleNav);
      });
}

//HEADER ANIMATION FUNCTION

const anchors = header.querySelectorAll("a");

const headerAnim = () => {
  const offsetY = window.scrollY;
  console.log("callled");

  header.classList.contains("header-scroll-style")
    ? offsetY < 50 && header.classList.remove("header-scroll-style")
    : offsetY > 200 && header.classList.add("header-scroll-style");
};

headerAnim();
window.addEventListener("scroll", headerAnim);
