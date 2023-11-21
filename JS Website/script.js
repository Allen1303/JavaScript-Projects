//Step 1: Create the Main Navigation Container
/*Create a new nav element using document.createElement('nav').
body.appendChild(nav).*/
const nav = document.createElement("nav");
nav.id = "desktop-nav";
document.body.appendChild(nav);

//Step 2: Create the Logo Container
//Create a div element using document.createElement('div').

const logoContainer = document.createElement("div");
logoContainer.className = "logo";
logoContainer.textContent = "John Doe";
nav.appendChild(logoContainer);

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
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = `#${linkText.toLowerCase()}`;
  a.textContent = linkText;
  li.appendChild(a);
  ul.appendChild(li);
}

//Step 6: Append All Elements to the Document
document.body.appendChild(nav);
// /*===================CSS  AND SASS STYLING======= ================ */

const styleElement = document.createElement("style");
const head = document.getElementsByTagName("head")[0];
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
  font-size: 1.3rem;
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
  font-size: 1.3rem;
}

.logo:hover {
  cursor: default;
}

`;
// const head = document.getElementsByTagName("head")[0];
head.appendChild(styleElement);
