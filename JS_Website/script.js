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
const menuLinksUl = document.createElement("div");
menuLinksUl.className = "menu-links";

for (const linksElement of liArray) {
  const menuLi = document.createElement("li");
  const menuAnchorTag = document.createElement("a");
  menuAnchorTag.href = `#${linksElement.toLowerCase()}`;
  menuAnchorTag.textContent = linksElement;
  menuLi.appendChild(menuAnchorTag);
  menuLinksUl.appendChild(menuLi);
}
hamburgerMenuDiv.appendChild(menuLinksUl);
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
const textDiv = document.createElement("div");
profilePictureDiv.className = "section__pic-container";
textDiv.className = "section__text";
profileSection.appendChild(profilePictureDiv);
profileSection.appendChild(textDiv);

//C--Create the Profile Picture:elements
const profileImg = document.createElement("img");
profileImg.src = "./assets/profile-pic1.png";
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
textDiv.appendChild(firstParagraph);
textDiv.appendChild(h1TitleElement);
textDiv.appendChild(secondParagraph);

//A--Create the Div for Button container
const buttonContainerDiv = document.createElement("div");
buttonContainerDiv.className = "btn-container";
//B--// Create the "Download CV" Button and Download function
const downloadButton = document.createElement("button");
downloadButton.className = "btn btn-color-2";
downloadButton.textContent = "Download CV";
downloadButton.onclick = () => {
  window.open("./assets/resume-example.pdf");
};
const contactButton = document.createElement("button");
// C-- Create the contact button and Button click function
contactButton.className = "btn btn-color-1";
contactButton.textContent = "Contact Info";
contactButton.onclick = () => {
  location.href = "./#contact";
};
// D-- Append both Buttons to the button container
buttonContainerDiv.appendChild(downloadButton);
buttonContainerDiv.appendChild(contactButton);

textDiv.appendChild(buttonContainerDiv);
// E-- Create the scocial container
const socialContainerDiv = document.createElement("div");
socialContainerDiv.id = "socials-container";
// Scocial Icons
const linkedInIcon = document.createElement("img");
linkedInIcon.src = "./assets/linkedin.png";
linkedInIcon.className = "icon";
linkedInIcon.onclick = () => {
  window.open("https://linkedin.com/", "_blank");
};

const gitHubIcon = document.createElement("img");
gitHubIcon.src = "./assets/github.png";
gitHubIcon.className = "icon";
gitHubIcon.onclick = () => {
  window.open("https://github.com/", "_blank");
};
socialContainerDiv.appendChild(linkedInIcon);
socialContainerDiv.appendChild(gitHubIcon);

textDiv.appendChild(socialContainerDiv);

/*====STEP 9 CREATE THE ABOUT SECTION WITH INFO====*/

const aboutSection = document.createElement("section");
aboutSection.id = "about";

// B-- Create the Paragraph element
const aboutParagraph = document.createElement("p");
aboutParagraph.className = "section__text__p1";
aboutParagraph.textContent = "Get To Know More";
aboutSection.appendChild(aboutParagraph);

// C--Create the H1 element
const aboutH1 = document.createElement("h1");
aboutH1.className = "title";
aboutH1.textContent = "About Me";
aboutSection.appendChild(aboutH1);

// D--Create the Main Div for Nested Divs
const aboutSectionDiv = document.createElement("div");
aboutSectionDiv.className = "section-container";
aboutSection.appendChild(aboutSectionDiv);

// E--Create about pic  elements and content
const aboutPicDiv = document.createElement("div");
aboutPicDiv.className = "section__pic-container";

const aboutTextDiv = document.createElement("div");
aboutSectionDiv.appendChild(aboutPicDiv);
aboutSectionDiv.appendChild(aboutTextDiv);

// F--Create About Image Elements
const aboutImg = document.createElement("img");
aboutImg.src = "./assets/about-pic.png";
aboutImg.alt = "Profile picture";
aboutImg.className = "about-pic";
aboutPicDiv.appendChild(aboutImg);

// G-- Adding the about Details Element
const aboutDetailsContainer = document.createElement("div");
aboutDetailsContainer.className = "about-details-container";
aboutSectionDiv.appendChild(aboutDetailsContainer);

// H--Create the Divs and elements for About t Containers
const aboutContainersDiv = document.createElement("div");
aboutContainersDiv.className = "about-containers";
aboutDetailsContainer.append(aboutContainersDiv);

// I--Create the details container for Experience
const detailsContainer = document.createElement("div");
detailsContainer.className = "details-container";
aboutContainersDiv.appendChild(detailsContainer);
// Create the details Container for Education Element
const detailsContainer2 = document.createElement("div");
detailsContainer2.className = "details-container";
aboutContainersDiv.appendChild(detailsContainer2);

//J--Create image element for experience icon
const experienceImg = document.createElement("img");
experienceImg.src = "./assets/experience.png";
experienceImg.alt = "Experience icon";
experienceImg.className = "icon";

// K--Create the H3 Header  and PTag the  Experience Element
const experienceH3 = document.createElement("h3");
experienceH3.innerText = "Experience";

const experienceParagraph = document.createElement("p");
experienceParagraph.innerHTML = "2+ years <br />Frontend Development";

detailsContainer.appendChild(experienceImg);
detailsContainer.appendChild(experienceH3);
detailsContainer.appendChild(experienceParagraph);
aboutContainersDiv.appendChild(detailsContainer);

// M--Create the Education Element for the Details Container
const educationImg = document.createElement("img");
educationImg.src = "./assets/education.png";
educationImg.alt = "Education icon";
educationImg.className = "icon";

const educationH3 = document.createElement("h3");
educationH3.innerText = "Education";

const educationParagraph = document.createElement("p");
educationParagraph.innerHTML =
  "B.Sc. Bachelors Degree<br />M.Sc. Masters Degree";

detailsContainer2.appendChild(educationImg);
detailsContainer2.appendChild(educationH3);
detailsContainer2.appendChild(educationParagraph);

aboutContainersDiv.appendChild(detailsContainer2);
aboutDetailsContainer.append(aboutContainersDiv);
// N--Create The Text Div container Element

const textContainerDiv = document.createElement("div");
textContainerDiv.className = "text-container";

const textParagraph = document.createElement("p");
textParagraph.innerText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis reprehenderit et laborum, rem, dolore eum quod voluptate exercitationem nobis, nihil esse debitis maxime facere minus sint delectus velit in eos quo officiis explicabo deleniti dignissimos. Eligendi illum libero dolorum cum laboriosam corrupti quidem,reiciendis ea magnam? Nulla, impedit fuga!";
aboutDetailsContainer.appendChild(textParagraph);

const arrowImg = document.createElement("img");
arrowImg.src = "./assets/arrow.png";
arrowImg.alt = "Arrow icon";
arrowImg.className = "icon arrow";
arrowImg.onclick = () => {
  location.href = "./#experience";
};
// Append the Arrow Img to the Text Container Div
aboutTextDiv.appendChild(arrowImg);

aboutDetailsContainer.appendChild(textContainerDiv);
// aboutSection.appendChild(arrowImg);
document.body.appendChild(aboutSection);

/*===STEP=10=CREATING THE EXPERIENCE SECTION====*/

// A-- Create The the Experience Main Section
const experienceSection = document.createElement("section");
experienceSection.id = "experience";

//B--Create and add the Paragraph Element
const pElement = document.createElement("p");
pElement.className = "section__text__p1";
pElement.textContent = "Explore My";
experienceSection.appendChild(pElement);

//C-- Craete and Add the H1 element
const h1Element = document.createElement("h1");
h1Element.className = "title";
h1Element.textContent = "Experience";
experienceSection.appendChild(h1Element);

//D-- Craete and Add the Experience Details Div element
const expDetailsContainer = document.createElement("div");
expDetailsContainer.className = "experience-details-container";
experienceSection.appendChild(expDetailsContainer);

//E--Craete and Add the About Containers Div element
const expAbout = document.createElement("div");
expAbout.className = "about-containers";
expDetailsContainer.appendChild(expAbout);

//F--Craete and Add the Experience Details Container Div element
const expDetails = document.createElement("div");
expDetails.className = "details-container";
expAbout.appendChildconst;

// G--Create and add the H2 element
const expH2 = document.createElement("h2");
expH2.className = "experience-sub-title";
expH2.textContent = "Frontend Development";
expDetails.appendChild(expH2);

// H--Create the Aticle container Div

const mainArticleDiv = document.createElement("div");
mainArticleDiv.className = "article-container";
expDetails.appendChild(mainArticleDiv);

// I--Create the article Tag elements
const article = document.createElement("article");

const articleImg = document.createElement("img");
articleImg.src = "./assets/checkmark.png";
articleImg.alt = "Experience icon";
articleImg.className = "icon";
// J--Create the article DIV, H#, P Tag  and Img elements
const articleDiv = document.createElement("div");

const articleH3 = document.createElement("h3");
articleH3.innerText = "HTML";

const articlePTag = document.createElement("p");
articlePTag.innerText = "Experienced";

// K--Append all elements to the Article and Div
articleDiv.appendChild(articleH3);
articleDiv.appendChild(articlePTag);
article.appendChild(articleDiv);
article.appendChild(articleImg);
mainArticleDiv.appendChild(article);

// L--Create the second Article Element
const secondArticle = document.createElement("article");

const secondArticleImg = document.createElement("img");
secondArticleImg.src = "./assets/checkmark.png";
secondArticleImg.alt = "Experience icon";
secondArticleImg.className = "icon";

// M--Create the Second article DIV, H3, P Tag and Img elements
const secondArticleDiv = document.createElement("div");

const secondArticleH3 = document.createElement("h3");
secondArticleH3.innerText = "CSS";

const secondArticlePTag = document.createElement("p");
secondArticlePTag.innerText = "Experienced";

secondArticleDiv.appendChild(secondArticleH3);
secondArticleDiv.appendChild(secondArticlePTag);
secondArticle.appendChild(secondArticleDiv);
secondArticle.appendChild(secondArticleImg);
mainArticleDiv.appendChild(secondArticle);

// N--Create the Third article DIV, H3, P Tag and Img Elements
const thirdArticle = document.createElement("article");

const thirdArticleImg = document.createElement("img");
thirdArticleImg.src = "./assets/checkmark.png";
thirdArticleImg.alt = "Experience icon";
thirdArticleImg.className = "icon";

const thirdArticleDiv = document.createElement("div");

const thirdArticleH3 = document.createElement("h3");
thirdArticleH3.innerText = "SASS";

const thirdArticlePTag = document.createElement("p");
thirdArticlePTag.innerText = "Intermediate";

thirdArticleDiv.appendChild(thirdArticleH3);
thirdArticleDiv.appendChild(thirdArticlePTag);
thirdArticle.appendChild(thirdArticleDiv);
thirdArticle.appendChild(thirdArticleImg);
mainArticleDiv.appendChild(thirdArticle);

//O-- Create the Forth article DIV, H3, P Tag and Img Elements

const forthArticle = document.createElement("article");

const forthArticleImg = document.createElement("img");
forthArticleImg.src = "./assets/checkmark.png";
forthArticleImg.alt = "Experience icon";
forthArticleImg.className = "icon";

const forthArticleDiv = document.createElement("div");

const forthArticleH3 = document.createElement("h3");
forthArticleH3.innerText = "JavaScript";

const forthArticlePTag = document.createElement("p");
forthArticlePTag.innerText = "Basic";

forthArticleDiv.appendChild(forthArticleH3);
forthArticleDiv.appendChild(forthArticlePTag);
forthArticle.appendChild(forthArticleDiv);
forthArticle.appendChild(forthArticleImg);
mainArticleDiv.appendChild(forthArticle);

//P--Create the Fifht article DIV, H3, P Tag and Img Elements
const fifthArticle = document.createElement("article");

const fifthArticleImg = document.createElement("img");
fifthArticleImg.src = "./assets/checkmark.png";
fifthArticleImg.alt = "Experience icon";
fifthArticleImg.className = "icon";

const fifthArticleDiv = document.createElement("div");

const fifthArticleH3 = document.createElement("h3");
fifthArticleH3.innerText = "TypeScript";

const fifthArticlePTag = document.createElement("p");
fifthArticlePTag.innerText = "Basic";

fifthArticleDiv.appendChild(fifthArticleH3);
fifthArticleDiv.appendChild(fifthArticlePTag);
fifthArticle.appendChild(fifthArticleDiv);
fifthArticle.appendChild(fifthArticleImg);
mainArticleDiv.appendChild(fifthArticle);

//Q--Create the Sixth article DIV, H3, P Tag and Img Elements

const sixthArticle = document.createElement("article");

const sixthArticleImg = document.createElement("img");
sixthArticleImg.src = "./assets/checkmark.png";
sixthArticleImg.alt = "Experience icon";
sixthArticleImg.className = "icon";

const sixthRticleDIV = document.createElement("div");

const sixthArticleH3 = document.createElement("h3");
sixthArticleH3.innerText = "Material UI";

const sixthArticlePTag = document.createElement("p");
sixthArticlePTag.innerText = "Intermediate";

sixthArticle.appendChild(sixthArticleH3);
sixthArticle.appendChild(sixthArticlePTag);
sixthArticle.appendChild(sixthRticleDIV);
mainArticleDiv.appendChild(sixthArticle);

/*============CSS  AND SASS STYLING============== */

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
  font-family: "Quicksand", sans-serif;
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
  color: lightblue;
  text-decoration: underline;
  text-underline-offset: 1rem;
  text-decoration-color: lightblue;
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
  font-weight: bold;
  background-color: black;
  transition: all 0.3 ease-in-out;

}
.hamburger-icon span:hover{
  color: lightblue;
  transition: all 300ms ease ;
  transform: scale(1.2);
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
    0.2);
  transition: all 0.3 ease-in-out;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  border-radius: 0.5rem;
}

.menu-links a {
  display: block;
  margin-top:10px;
  padding-top: 8px;
  text-align: center;
  font-size: 1rem;
  color: black;
  text-decoration: none;
  transition: all 0.3 ease-in-out;
}
.menu-links a:hover {
  color: lightblue;
  transform: scale(1.2);
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
  transition: all 300ms ease;
}
.icon:hover{
color: lightblue;
 transform: scale(1.2);
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
  border: lightblue 0.1rem solid;
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
