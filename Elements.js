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
const section1 = document.createElement("section");
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
aSection1.href = "https://freecatphotoapp.com";

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
const section2 = document.createElement("section");
mainElement.appendChild(section2);

//Create an h2 element and set its text content.
const h2Section2 = document.createElement("h2");
h2Section2.textContent = "Cat Lists";
//Append the h2 element to the section element.
section2.appendChild(h2Section2);
//Create an h3 element. then Set the text content for the h3 element.
const h3Section2 = document.createElement("h3");
h3Section2.textContent = "Things cats love:";

//Create a ul element.
const ulSection2 = document.createElement("ul");

section2.appendChild(ulSection2);
//Create li elements and set their text content.
const li1 = document.createElement("li");
li1.textContent = "Cat nip";
//Append the li elements to the ul element.
ulSection2.appendChild(li1);

const li2 = document.createElement("li");
li2.textContent = "Laser pointers";
//Append the li elements to the ul element.
ulSection2.appendChild(li2);

const li3 = document.createElement("li");
li3.textContent = "Lasagna";
//Append the li elements to the ul element.
ulSection2.appendChild(li3);

//Create a figure element.
const figureSection2 = document.createElement("figure");
section2.appendChild(figureSection2);

//Create an img element, set its source and alt attributes. and append it to figure Element.
const imgSection2 = document.createElement("img");
imgSection2.src = "https://cdn.freecodecamp.org/curriculum/cat-photo-app/lasagna.jpg";
/*Style the image*/
imgSection2.style.borderRadius = ".6rem";
imgSection2.alt = "A slice of lasagna on a plate";
figureSection2.appendChild(imgSection2);

//Create a figcaption element and set its text content. And append it to the Figure Element.
const figcaptionSection2 = document.createElement("figcaption");
figcaptionSection2.textContent = "Cats love lasagna";
figureSection2.appendChild(figcaptionSection2);

//APPEND SECTION 2 TO THE MAIN ELEMENT.
mainElement.appendChild(section2);

