/*=====STEP 1 CRETAE AND ADD THE <MAIN> ELEMENT====*/
const mainElement = document.createElement("main");
document.body.appendChild(mainElement);

/**==STEP 2 CREATE AND ADD THE <H1> ELEMENT=========== */

// Add the <h1> element
const h1Element = document.createElement("h1");
h1Element.textContent = "CatPhotoApp";

//Append the h1 element to the main element.
mainElement.appendChild(h1Element);

/**====STEP 3 CREATE <SECTION> 1=ELEMENT========= */

// Create and add Section 1 to the  mainElement
const section1 = document.createElement("section1");
mainElement.appendChild(section1);

//Create an h2 element and set its text content.
const h2Section1 = document.createElement("h2");
h2Section1.textContent = "Cat Photos";
//Append the h2 element to the section element.
section1.appendChild(h2Section1);

//Create the paragraph ("P") element.
const pSection1 = document.createElement("p");
//Add the text content for the paragraph element, including a link.
pSection1.innerHTML =
  'See more <a target="_blank" href="https://freecatphotoapp.com">cat photos</a> in our gallery';
section1.appendChild(pSection1);

// Create a Anchor element ("a tag")and add it to the p tag element
const aSection1 = document.createElement("a");
aSection1.heref = "https://freecatphotoapp.com";

const imgSection1 = document.createElement("img");
imgSection1.src =
  "https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg";

  /*Style the image*/
imgSection1.style.borderRadius = ".6rem";
imgSection1.alt = "A cute orange cat lying on its back";
//Append the image to the A-tab "a"
aSection1.appendChild(imgSection1);
//Append the A-tag to Section 1
section1.appendChild(aSection1);

/**====STEP 4 CREATE AND THE <SECTION>=2 ELEMENT===*/

