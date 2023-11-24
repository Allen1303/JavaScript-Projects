//Step 1: Create the Main Navigation Container
const mainNav = document.createElement("nav");
mainNav.id = "desktop-nav";
const logoDiv = document.createElement("div");
logoDiv.className = "logo";
logoDiv.textContent = "John Doe";
mainNav.appendChild(logoDiv);
document.body.appendChild(mainNav);

//Step 2: Create the Navigation Links Container
const navLinksDiv = document.createElement("div");
mainNav.appendChild(navLinksDiv);

//Step 3: Create the Unordered List (ul) for Navigation Links
const ulList = document.createElement("ul");
ulList.className = "nav-links";
navLinksDiv.appendChild(ulList);

//Step 4: Create List Items (li) and Anchor Links (a) using for...of loop
const liArray = ["About", "Experience", "Projects", "Contact"];
for (const liArrayItems of liArray) {
  const liElement = document.createElement("li");
  const aTag = document.createElement("a");
  aTag.href = `#${liArrayItems.toLowerCase()}`;
  aTag.textContent = liArrayItems;
  liElement.appendChild(aTag);
  ulList.appendChild(liElement);
}
//Step 5: Append All Elements to the Document
document.body.appendChild(mainNav);

//Step 6: Building the Hamburger Nav
// A--Repeate the same process as creating mainNav Element
const hamburgerNav = document.createElement("nav");
hamburgerNav.id = "hamburger-nav";
const hamburgerLogoDiv = document.createElement("div");
hamburgerLogoDiv.className = "logo";
hamburgerLogoDiv.textContent = "John Doe";
hamburgerNav.appendChild(hamburgerLogoDiv);
// B-- Create Hamburger div, menu and append it
const hamburgerMenuDiv = document.createElement("div");
hamburgerMenuDiv.className = "hamburger-menu";
hamburgerNav.appendChild(hamburgerMenuDiv);
// C-- create the hamburger icon,class name and  toggle attribute
const hamburgerIcon = document.createElement("div");
hamburgerIcon.className = "hamburger-icon";
hamburgerIcon.onclick = toggleMenu;
hamburgerMenuDiv.appendChild(hamburgerIcon);
// D --use the for loop emthod to create the spanElements

for (let spanIndex = 0; spanIndex < 3; spanIndex++) {
  const spanElement = document.createElement("span");
  hamburgerIcon.appendChild(spanElement);
}

// E-- Repeate step 4 to create menu-links, div and List
const menuLinksDiv = document.createElement("div");
menuLinksDiv.className = "menu-links";

for (const linksElement of liArray) {
  const menuLi = document.createElement("li");
  const menuAnchorTag = document.createElement("a");
  menuAnchorTag.href = `#${linksElement.toLowerCase()}`;
  menuAnchorTag.textContent = linksElement;
  menuLi.appendChild(menuAnchorTag);
  menuLinksDiv.appendChild(menuLi);
}
hamburgerMenuDiv.appendChild(menuLinksDiv);
document.body.appendChild(hamburgerNav);

//==Step 7: Create the toggleMenu Function==//
function toggleMenu() {
  // A--Create the menu and Icon Elements
  const menuLinks = document.querySelector(".menu-links");
  const menuIcon = document.querySelector(".hamburger-icon");
  //B--Toggle Classes for the Menu Links and menuIcon:
  menuLinks.classList.toggle("open");
  menuIcon.classList.toggle("open");
}

//==Step 8: SECTION WITH PROGILE INFO==//
// A--### **Step 8: Section with Profile Information**

//A--Create the Section
const profileSection = document.createElement("section");
profileSection.id = "profile";
document.body.appendChild(profileSection);

// B--Create Div for Profile Pic and text
const profilePictureDiv = document.createElement("div");
const TextDiv = document.createElement("div");
profilePictureDiv.className = "section__pic-container";
TextDiv.className = "section__text";
profileSection.appendChild(profilePictureDiv);
profileSection.appendChild(TextDiv);

//C--Create the Profile Picture:elements
const profileImg = document.createElement("img");
profileImg.src = "./assets/profile-pic.png";
profilePictureDiv.appendChild(profileImg);

//D--Create Text Content:Elements
const firstParagraph = document.createElement("p");
firstParagraph.className = "section__text__p1";
firstParagraph.textContent = "Hello, I'm";
const h1TitleElement = document.createElement("h1");
h1TitleElement.className = "title";
h1TitleElement.textContent = "John Doe";
const secondParagraph = document.createElement("p");
secondParagraph.className = "section__text__p2";
secondParagraph.textContent = "Frontend Developer";
TextDiv.appendChild(firstParagraph);
TextDiv.appendChild(h1TitleElement);
TextDiv.appendChild(secondParagraph);

//E--Create the Elements for the Button Container:

/*==========CSS  AND SASS STYLING========== */

// Step 1: Create a Style Element
const styleElement = document.createElement("style");

// Step 2: Set CSS Styles
styleElement.innerHTML = `
/* GENERAL */

@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap");

* {
  margin: 0;
  padding: 0;
}

body {
  font-family: "Poppins", sans-serif;
}

html {
  scroll-behavior: smooth;
}

p {
  color: rgb(85, 85, 85);
}

/* TRANSITION */

a,
.btn {
  transition: all 300ms ease;
}

/* DESKTOP NAV */

nav,
.nav-links {
  display: flex;
}

nav {
  justify-content: space-around;
  align-items: center;
  height: 17vh;
}

.nav-links {
  gap: 2rem;
  list-style: none;
  font-size: 1.2rem;
}

a {
  color: black;
  text-decoration: none;
  text-decoration-color: white;
}

a:hover {
  color: grey;
  text-decoration: underline;
  text-underline-offset: 1rem;
  text-decoration-color: rgb(181, 181, 181);
}

.logo {
  font-size: 1.4rem;
}

.logo:hover {
  cursor: default;
}

/* HAMBURGER MENU */

#hamburger-nav {
  display: none;
}
@media screen and (max-width: 768px) {
  #hamburger-nav {
    display: block; /* Change 'block' to 'flex' or other appropriate value */
  }
}

.hamburger-menu {
  position: relative;
  display: inline-block;
}

.hamburger-icon {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 24px;
  width: 30px;
  cursor: pointer;
}

.hamburger-icon span {
  width: 100%;
  height: 2px;
  background-color: black;
  transition: all 0.3 ease-in-out;
}

.menu-links {
  position: absolute;
  top: 100%;
  right: -100%;
  width: fit-content;
  max-height: 0;
  overflow: hidden;
  background-color: rgb(
    255,
    255,
    255,
    0.3);
  transition: all 0.3 ease-in-out;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  
}

.menu-links a {
  display: block;
  margin-top:10px;
  padding-top: 8px;
  text-align: center;
  font-size: 1.2rem;
  color: black;
  text-decoration: none;
  transition: all 0.3 ease-in-out;
}
.menu-links a:hover {
  color: gray;
  
}


.menu-links li {
  list-style: none;
}

.menu-links.open {
  max-height: 300px;
}

.hamburger-icon.open span:first-child {
  transform: rotate(45deg) translate(10px, 5px);
}

.hamburger-icon.open span:nth-child(2) {
  opacity: 0;
}

.hamburger-icon.open span:last-child {
  transform: rotate(-45deg) translate(10px, -5px);
}

.hamburger-icon span:first-child {
  transform: none;
}

.hamburger-icon span:first-child {
  opacity: 1;
}

.hamburger-icon span:first-child {
  transform: none;
}

/* SECTIONS */

section {
  padding-top: 4vh;
  height: 96vh;
  margin: 0 10rem;
  box-sizing: border-box;
  min-height: fit-content;
}

.section-container {
  display: flex;
}

/* PROFILE SECTION */

#profile {
  display: flex;
  justify-content: center;
  gap: 5rem;
  height: 80vh;
}

.section__pic-container {
  display: flex;
  height: 400px;
  width: 400px;
  margin: auto 0;
}

.section__text {
  align-self: center;
  text-align: center;
}

.section__text p {
  font-weight: 600;
}

.section__text__p1 {
  text-align: center;
}

.section__text__p2 {
  font-size: 1.75rem;
  margin-bottom: 1rem;
}

.title {
  font-size: 3rem;
  text-align: center;
}

#socials-container {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  gap: 1rem;
}

/* ICONS */

.icon {
  cursor: pointer;
  height: 2rem;
}

/* BUTTONS */

.btn-container {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.btn {
  font-weight: 600;
  transition: all 300ms ease;
  padding: 1rem;
  width: 8rem;
  border-radius: 2rem;
}

.btn-color-1,
.btn-color-2 {
  border: rgb(53, 53, 53) 0.1rem solid;
}

.btn-color-1:hover,
.btn-color-2:hover {
  cursor: pointer;
}

.btn-color-1,
.btn-color-2:hover {
  background: rgb(53, 53, 53);
  color: white;
}

.btn-color-1:hover {
  background: rgb(0, 0, 0);
}

.btn-color-2 {
  background: none;
}

.btn-color-2:hover {
  border: rgb(255, 255, 255) 0.1rem solid;
}

.btn-container {
  gap: 1rem;
}

/* ABOUT SECTION */

#about {
  position: relative;
}

.about-containers {
  gap: 2rem;
  margin-bottom: 2rem;
  margin-top: 2rem;
}

.about-details-container {
  justify-content: center;
  flex-direction: column;
}

.about-containers,
.about-details-container {
  display: flex;
}

.about-pic {
  border-radius: 2rem;
}

.arrow {
  position: absolute;
  right: -5rem;
  bottom: 2.5rem;
}

.details-container {
  padding: 1.5rem;
  flex: 1;
  background: white;
  border-radius: 2rem;
  border: rgb(53, 53, 53) 0.1rem solid;
  border-color: rgb(163, 163, 163);
  text-align: center;
}

.section-container {
  gap: 4rem;
  height: 80%;
}

.section__pic-container {
  height: 400px;
  width: 400px;
  margin: auto 0;
}

/* EXPERIENCE SECTION */

#experience {
  position: relative;
}

.experience-sub-title {
  color: rgb(85, 85, 85);
  font-weight: 600;
  font-size: 1.75rem;
  margin-bottom: 2rem;
}

.experience-details-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.article-container {
  display: flex;
  text-align: initial;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 2.5rem;
  justify-content: space-around;
}

article {
  display: flex;
  width: 10rem;
  justify-content: space-around;
  gap: 0.5rem;
}

article .icon {
  cursor: default;
}

/* PROJECTS SECTION */

#projects {
  position: relative;
}

.color-container {
  border-color: rgb(163, 163, 163);
  background: rgb(250, 250, 250);
}

.project-img {
  border-radius: 2rem;
  width: 90%;
  height: 90%;
}

.project-title {
  margin: 1rem;
  color: black;
}

.project-btn {
  color: black;
  border-color: rgb(163, 163, 163);
}

/* CONTACT */

#contact {
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 70vh;
}

.contact-info-upper-container {
  display: flex;
  justify-content: center;
  border-radius: 2rem;
  border: rgb(53, 53, 53) 0.1rem solid;
  border-color: rgb(163, 163, 163);
  background: (250, 250, 250);
  margin: 2rem auto;
  padding: 0.5rem;
}

.contact-info-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin: 1rem;
}

.contact-info-container p {
  font-size: larger;
}

.contact-icon {
  cursor: default;
}

.email-icon {
  height: 2.5rem;
}

/* FOOTER SECTION */

footer {
  height: 26vh;
  margin: 0 1rem;
}

footer p {
  text-align: center;
}

/* Sass Code */
@media screen and (max-width: 1400px) {
  #profile {
    height: 83vh;
    margin-bottom: 6rem;
  }
  .about-containers {
    flex-wrap: wrap;
  }
  #contact,
  #projects {
    height: fit-content;
  }
}

@media screen and (max-width: 1200px) {
  #desktop-nav {
    display: none;
  }
  #hamburger-nav {
    display: flex;
  }
  #experience,
  .experience-details-container {
    margin-top: 2rem;
  }
  #profile,
  .section-container {
    display: block;
  }
  .arrow {
    display: none;
  }
  section,
  .section-container {
    height: fit-content;
  }
  section {
    margin: 0 5%;
  }
  .section__pic-container {
    width: 275px;
    height: 275px;
    margin: 0 auto 2rem;
  }
  .about-containers {
    margin-top: 0;
  }
}

@media screen and (max-width: 600px) {
  #contact,
  footer {
    height: 40vh;
  }
  #profile {
    height: 83vh;
    margin-bottom: 0;
  }
  article {
    font-size: 1rem;
  }
  footer nav {
    height: fit-content;
    margin-bottom: 2rem;
  }
  .about-containers,
  .contact-info-upper-container,
  .btn-container {
    flex-wrap: wrap;
  }
  .contact-info-container {
    margin: 0;
  }
  .contact-info-container p,
  .nav-links li a {
    font-size: 1rem;
  }
  .experience-sub-title {
    font-size: 1.25rem;
  }
  .logo {
    font-size: 1.5rem;
  }
  .nav-links {
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
  }
  .section__pic-container {
    width: auto;
    height: 46vw;
    justify-content: center;
  }
  .section__text__p2 {
    font-size: 1.25rem;
  }
  .title {
    font-size: 2rem;
  }
  .text-container {
    text-align: justify;
  }
}
`;

// Step 3: Append Style Element to Head
document.head.appendChild(styleElement);
