import "./stylesheets/index.css";

const gitIcon = document.querySelector(".gitIcon");
const linkedInIcon = document.querySelector(".linkedInIcon");

gitIcon.addEventListener(
  "click",
  () => (location.href = "https://github.com/Gohan61"),
);

linkedInIcon.addEventListener(
  "click",
  () => (location.href = "https://www.linkedin.com/in/gokhan-sancak/"),
);
