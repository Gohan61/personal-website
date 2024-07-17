import "./stylesheets/index.css";
import GitIcon from "./assets/github-original.svg";
import LinkedinIcon from "./assets/linkedin-plain.svg";
import LinkIcon from "./assets/share-outline.svg";
import ProfilePicture from "./assets/Profile-picture-Gokhan.jpg";
import NahebookImage from "./assets/Nahebook-desktop-feed (Phone).png";
import MessageImage from "./assets/Messaging-app-display.png";
import BattleshipImage from "./assets/battleship-display.png";
import ShoppingImage from "./assets/Shopping-cart-display.png";
import BstImage from "./assets/Binary_search_tree.svg";
import PhotoTagImage from "./assets/Phototag-display.png";
import EmailIcon from "./assets/email-outline.svg";

function addLinkListener(link, element) {
  element.addEventListener("click", () => (location.href = link));
}

(function addListeners() {
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

  gitIcon.src = GitIcon;
  nahebookGit.src = GitIcon;
  messageGit.src = GitIcon;
  messageGit.src = GitIcon;
  dataGit.src = GitIcon;
  battleshipGit.src = GitIcon;
  shoppingGit.src = GitIcon;
  photoGit.src = GitIcon;
  contactGit.src = GitIcon;

  linkedInIcon.src = LinkedinIcon;
  contactLinkedin.src = LinkedinIcon;

  nahebookLink.src = LinkIcon;
  messageLink.src = LinkIcon;
  dataLink.src = LinkIcon;
  battleshipLink.src = LinkIcon;
  shoppingLink.src = LinkIcon;
  photoLink.src = LinkIcon;

  linksAndElements.forEach((item) => addLinkListener(item[1], item[0]));

  const encEmail = "Zy5zYW5jYWtAdHV0YW5vdGEuY29t";
  const email = document.querySelector(".email");
  email.setAttribute("href", "mailto:".concat(atob(encEmail)));

  const emailIcon = document.querySelector(".emailContact img ");
  emailIcon.src = EmailIcon;
})();

(function setImages() {
  const profilePicture = document.querySelector(".profilePicture img");
  profilePicture.src = ProfilePicture;

  const nahebookImage = document.querySelector(".project1 img");
  nahebookImage.src = NahebookImage;

  const messageImage = document.querySelector(".project2 img");
  messageImage.src = MessageImage;

  const bstImage = document.querySelector(".project3 img");
  bstImage.src = BstImage;

  const battleshipImage = document.querySelector(".project4 img");
  battleshipImage.src = BattleshipImage;

  const shoppingImage = document.querySelector(".project5 img");
  shoppingImage.src = ShoppingImage;

  const photoTagImage = document.querySelector(".project6 img");
  photoTagImage.src = PhotoTagImage;
})();
