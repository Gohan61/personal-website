import "./stylesheets/index.css";

const gitIcon = document.querySelector(".gitIcon");
const linkedInIcon = document.querySelector(".linkedInIcon");

const nahebookGit = document.querySelector(".nahebook-git");
const nahebookLink = document.querySelector(".nahebook-link");

const messageGit = document.querySelector(".message-git");
const messageLink = document.querySelector(".message-link");

const dataGit = document.querySelector(".data-git");
const dataLink = document.querySelector(".data-link");

const battleshipGit = document.querySelector(".battleship-git");
const battleshipLink = document.querySelector(".battleship-link");

const shoppingGit = document.querySelector(".shopping-git");
const shoppingLink = document.querySelector(".shopping-link");

const photoGit = document.querySelector(".photo-git");
const photoLink = document.querySelector(".photo-link");

const contactGit = document.querySelector(".contactIcons .gitIcon");
const contactLinkedin = document.querySelector(".contactIcons .linkedInIcon");

function addLinkListener(link, element) {
  element.addEventListener("click", () => (location.href = link));
}

(function addListeners() {
  const linksAndElements = [
    [gitIcon, "https://github.com/Gohan61"],
    [linkedInIcon, "https://www.linkedin.com/in/gokhan-sancak/"],
    [nahebookGit, "https://github.com/Gohan61/nahebook"],
    [nahebookLink, "https://nahebook-odin-frontend.netlify.app/"],
    [messageGit, "https://github.com/Gohan61/messaging-app"],
    [messageLink, "https://messaging-app-odin-frontend.netlify.app/"],
    [dataGit, "https://github.com/Gohan61/computer-science-odin"],
    [dataLink, "https://github.com/Gohan61/computer-science-odin"],
    [battleshipGit, "https://github.com/Gohan61/testing-javascript"],
    [battleshipLink, "https://gohan61.github.io/testing-javascript/"],
    [shoppingGit, "https://github.com/Gohan61/shopping-cart"],
    [shoppingLink, "https://main--odin-react-shoppingcart.netlify.app/"],
    [photoGit, "https://github.com/Gohan61/phototaggingapp"],
    [photoLink, "https://production--phototag-frontend-odin.netlify.app/"],
    [contactGit, "https://github.com/Gohan61"],
    [contactLinkedin, "https://www.linkedin.com/in/gokhan-sancak/"],
  ];

  linksAndElements.forEach((item) => addLinkListener(item[1], item[0]));
})();

const encEmail = "Zy5zYW5jYWtAdHV0YW5vdGEuY29t";
const email = document.querySelector(".email");
email.setAttribute("href", "mailto:".concat(atob(encEmail)));
