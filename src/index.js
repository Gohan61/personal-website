import "./stylesheets/index.css";
import GitIcon from "./assets/github-original.svg";
import LinkedinIcon from "./assets/linkedin-plain.svg";
import LinkIcon from "./assets/share-outline.svg";
import EmailIcon from "./assets/email-outline.svg";

(function addListeners() {
  const gitIcon = document.querySelector(".gitIcon");
  const linkedInIcon = document.querySelector(".linkedInIcon");

  const nahebookGit = document.querySelector(".first-git");
  const nahebookLink = document.querySelector(".first-link");

  const kagithanGit = document.querySelector(".second-git");
  const kagithanLink = document.querySelector(".second-link");

  const dataGit = document.querySelector(".third-git");

  const tcrGit = document.querySelector(".fourth-git");
  const tcrLink = document.querySelector(".fourth-link");

  const selenartGit = document.querySelector(".fifth-git");
  const selenartLink = document.querySelector(".fifth-link");

  const shopPageGit = document.querySelector(".sixth-git");
  const shopPageLink = document.querySelector(".sixth-link");

  const contactGit = document.querySelector(".contactIcons .gitIcon");
  const contactLinkedin = document.querySelector(".contactIcons .linkedInIcon");

  gitIcon.src = GitIcon;
  nahebookGit.src = GitIcon;
  kagithanGit.src = GitIcon;
  kagithanLink.src = LinkIcon;
  dataGit.src = GitIcon;
  tcrGit.src = GitIcon;
  selenartGit.src = GitIcon;
  shopPageGit.src = GitIcon;
  shopPageLink.src = LinkIcon;
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
