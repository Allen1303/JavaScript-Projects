//Step 1: Create the Main Navigation Container
/*Create a new nav element using document.createElement('nav').
body.appendChild(nav).*/
const nav = document.createElement("nav");
nav.id = "desktop-nav";
document.body.appendChild(nav);

//Step 2: Create the Logo Container
//Create a div element using document.createElement('div').
const logoElement = document.createElement("div");
logoElement.className = "logo";
logoElement.textContent = "John Doe";
nav.appendChild(logoElement);

/*Step 3: Create the Navigation Links Container
Create a second div element using document.createElement('div').*/
const secondDiv = document.createElement("div");
nav.appendChild(secondDiv);

//Step 4: Create the Unordered List (ul) for Navigation Links
//Create a ul element using document.createElement('ul').
const ul = document.createElement("ul");
ul.className = "nav-links";
secondDiv.appendChild(ul);

//Step 5: Create List Items (li) and Anchor Links (a) using for...of loop
const linkData = ["About", "Experience", "Projects", "Contact"];
for (const linkText of linkData) {
  const liElement = document.createElement("li");
  const aElement = document.createElement("a");
  aElement.href = `#${linkText.toLowerCase()}`;
  aElement.textContent = linkText;
  liElement.appendChild(aElement);
  ul.appendChild(liElement);
}
//Step 6: Append All Elements to the Document
document.body.appendChild(nav);

//=====BUILDING THE HAMBURGER NAV=======//
const secondNav = document.createElement("nav");
secondNav.id = "hamburger-nav";
document.body.appendChild(secondNav);

//STEP 2. Create the Hamburger Logo Element
const hamburgerLogo = document.createElement("div");
hamburgerLogo.className = "logo";
hamburgerLogo.textContent = "John Doe";

//Create the Hamburger Menu Elemnent
const hamnburgerMenu = document.createElement("div");
hamnburgerMenu.className = "hamburger-menu";
secondNav.appendChild(hamnburgerMenu);

// Create the Hamburger Icon Div with Onclick Feature
const hamburgerIcon = document.createElement("div");
hamburgerIcon.className = "hamburger-icon";
hamburgerIcon.addEventListener("click", toggleMenu);

//Create and Iterate the Span Elements
for (let i = 0; i < 3; i++) {
  const spanElement = document.createElement("span");
  hamburgerIcon.appendChild(spanElement);
}
hamnburgerMenu.appendChild(hamburgerIcon);
// /*===================CSS  AND SASS STYLING======= ================ */

const styleElement = document.createElement("style");
const head = document.getElementsByTagName("head")[0];
styleElement.innerHTML = `
/* GENERAL */

  @import url('https://fonts.googleapis.com/css2?family=Agbalumo&family=Carter+One&family=Ephesis&family=Exo:ital,wght@0,100;0,700;0,800;0,900;1,500;1,700;1,800;1,900&family=Leckerli+One&family=Ma+Shan+Zheng&family=Marck+Script&family=Modak&family=Moirai+One&family=Monoton&family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Pacifico&family=Permanent+Marker&family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Poppins:ital,wght@0,100;0,200;0,400;1,400&family=Quicksand:wght@300;400;500;600;700&family=Righteous&family=Sacramento&family=Tangerine:wght@700&family=Yuji+Boku&display=swap');


* {
  margin: 0;
  padding: 0;
}

body {
  font-family: "Montserrat", sans-serif;
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
  font-size: 1.1rem;
  font-weight:400;
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
  font-size: 1.2rem;
  font-weight:550;
}

.logo:hover {
  cursor: default;
}

`;
// const head = document.getElementsByTagName("head")[0];
head.appendChild(styleElement);
