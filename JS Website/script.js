//Step 1: Create the Main Navigation Container
/*Create a new nav element using document.createElement('nav').
Set the id attribute of the nav element to "desktop-nav" using element.id = "desktop-nav".
Append the nav element to the document.body using document.body.appendChild(nav).*/
const nav = document.createElement("nav");
nav.id = "desktop-nav";
document.body.appendChild(nav);

//Step 2: Create the Logo Container
/*Create a div element using document.createElement('div').
Set the class attribute of the div element to "logo" using element.className = "logo".
Set the text content of the div element to "John Doe" using element.textContent = "John Doe".
Append the div element to the nav element.*/
const logoContainer = document.createElement("div");
logoContainer.className = "logo";
logoContainer.textContent = "John Doe";
nav.appendChild(logoContainer);

/*Step 3: Create the Navigation Links Container
Create a second div element using document.createElement('div').
Append this second div element to the nav element.*/
const linksContainer = document.createElement("div");
nav.appendChild(linksContainer);

/**Step 4: Create the Unordered List (ul) for Navigation Links 
 Create a ul element using document.createElement('ul').
Set the class attribute of the ul element to "nav-links" using element.className = "nav-links".
Append the ul element to the second div element created in Step 3. 
*/
const ul = document.createElement("ul");
ul.className = "nav-links ";
linksContainer.append(ul);

/*===================CSS  AND SASS STYLING======= ================ */
const cssStyle = document.head;
const style = document.createElement("style");
style.innerHTML = `



`