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
ul.className = "nav-links ";
linksContainer.appendChild(ul);

//Step 5: Create List Items (li) and Anchor Links (a) using for...of loop
const linkData = ["About", "Experience", "Projects", "Contact"]
for (const linkText of linkData) {
    
    
}



//Step 6: Append All Elements to the Document
document.body.appendChild(nav)
// /*===================CSS  AND SASS STYLING======= ================ */

// const styleElement = document.createElement("style");
// styleElement.innerHTML = `



// `;
// document.head.appendChild();

// JavaScript Code for Dynamic HTML Creation
// const nav = document.createElement('nav');
// nav.id = 'desktop-nav';
// document.body.appendChild(nav);

// const logoContainer = document.createElement('div');
// logoContainer.className = 'logo';
// logoContainer.textContent = 'John Doe';
// nav.appendChild(logoContainer);

// const secondDiv = document.createElement('div');
// nav.appendChild(secondDiv);

// const ul = document.createElement('ul');
// ul.className = 'nav-links';
// secondDiv.appendChild(ul);

// const linkData = ['About', 'Experience', 'Projects', 'Contact'];

// for (const linkText of linkData) {
//   const li = document.createElement('li');
//   const a = document.createElement('a');
//   a.href = `#${linkText.toLowerCase()}`;
//   a.textContent = linkText;
//   li.appendChild(a);
//   ul.appendChild(li);
// }

// document.body.appendChild(nav);
