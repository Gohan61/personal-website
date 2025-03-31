import "./stylesheets/index.css";
import GitIcon from "./assets/github-original.svg";
import LinkedinIcon from "./assets/linkedin-plain.svg";
import LinkIcon from "./assets/share-outline.svg";
import ProfilePicture from "./assets/Profile-picture-Gokhan.jpg";
import NahebookImage from "./assets/Nahebook-desktop-feed (Phone).png";
import MessageImage from "./assets/Messaging-app-display.png";
import TCRImage from "./assets/tcr_home.png";
import SelenartImage from "./assets/selenart-home.png";
import BstImage from "./assets/Binary_search_tree.svg";
import FileUploaderImage from "./assets/file_uploader.png";
import EmailIcon from "./assets/email-outline.svg";

(function addListeners() {
  const gitIcon = document.querySelector(".gitIcon");
  const linkedInIcon = document.querySelector(".linkedInIcon");

  const nahebookGit = document.querySelector(".first-git");
  const nahebookLink = document.querySelector(".first-link");

  const messageGit = document.querySelector(".second-git");

  const dataGit = document.querySelector(".third-git");

  const tcrGit = document.querySelector(".fourth-git");
  const tcrLink = document.querySelector(".fourth-link");

  const selenartGit = document.querySelector(".fifth-git");
  const selenartLink = document.querySelector(".fifth-link");

  const fileUploadGit = document.querySelector(".sixth-git");

  const contactGit = document.querySelector(".contactIcons .gitIcon");
  const contactLinkedin = document.querySelector(".contactIcons .linkedInIcon");

  gitIcon.src = GitIcon;
  nahebookGit.src = GitIcon;
  messageGit.src = GitIcon;
  dataGit.src = GitIcon;
  tcrGit.src = GitIcon;
  selenartGit.src = GitIcon;
  fileUploadGit.src = GitIcon;
  contactGit.src = GitIcon;

  linkedInIcon.src = LinkedinIcon;
  contactLinkedin.src = LinkedinIcon;

  nahebookLink.src = LinkIcon;
  tcrLink.src = LinkIcon;
  selenartLink.src = LinkIcon;

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

  const tcrImage = document.querySelector(".project4 img");
  tcrImage.src = TCRImage;

  const selenartImage = document.querySelector(".project5 img");
  selenartImage.src = SelenartImage;

  const fileUploadImage = document.querySelector(".project6 img");
  fileUploadImage.src = FileUploaderImage;
})();
