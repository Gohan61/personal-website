import "./stylesheets/index.css";
import GitIcon from "./assets/github-original.svg";
import LinkedinIcon from "./assets/linkedin-plain.svg";
import LinkIcon from "./assets/share-outline.svg";
import ProfilePicture from "./assets/Profile-picture-Gokhan.jpg";
import NahebookImage from "./assets/Nahebook-desktop-feed (Phone).png";
import MessageImage from "./assets/Messaging-app-display.png";
import BattleshipImage from "./assets/battleship-display.png";
import ShoppingImage from "./assets/fake-store-example.png";
import BstImage from "./assets/Binary_search_tree.svg";
import FileUploaderImage from "./assets/file-uploader.png";
import EmailIcon from "./assets/email-outline.svg";

(function addListeners() {
  const gitIcon = document.querySelector(".gitIcon");
  const linkedInIcon = document.querySelector(".linkedInIcon");

  const nahebookGit = document.querySelector(".nahebook-git");
  const nahebookLink = document.querySelector(".nahebook-link");

  const messageGit = document.querySelector(".message-git");

  const dataGit = document.querySelector(".data-git");

  const battleshipGit = document.querySelector(".battleship-git");
  const battleshipLink = document.querySelector(".battleship-link");

  const shoppingGit = document.querySelector(".shopping-git");
  const shoppingLink = document.querySelector(".shopping-link");

  const fileUploadGit = document.querySelector(".photo-git");

  const contactGit = document.querySelector(".contactIcons .gitIcon");
  const contactLinkedin = document.querySelector(".contactIcons .linkedInIcon");

  gitIcon.src = GitIcon;
  nahebookGit.src = GitIcon;
  messageGit.src = GitIcon;
  dataGit.src = GitIcon;
  battleshipGit.src = GitIcon;
  shoppingGit.src = GitIcon;
  fileUploadGit.src = GitIcon;
  contactGit.src = GitIcon;

  linkedInIcon.src = LinkedinIcon;
  contactLinkedin.src = LinkedinIcon;

  nahebookLink.src = LinkIcon;
  battleshipLink.src = LinkIcon;
  shoppingLink.src = LinkIcon;

  const encEmail = "Zy5zYW5jYWtAcHJvdG9uLm1l";
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

  const fileUploadImage = document.querySelector(".project6 img");
  fileUploadImage.src = FileUploaderImage;
})();
