"use strict";
function createCard() {
  //Create the section for conataining the Div with the image card.
  const mainSection = document.createElement("section");
  mainSection.className = "card";

  //Create the Div that contains the actual Image

  const divElement = document.createElement("div");
  divElement.className = "img-container";

  //Cretae the Image Element and append it to the Div
  const imageElement = document.createElement("img");
  imageElement.src = "./image/black-woman-model-with-tropical-leaf-head.jpg";
  divElement.appendChild(imageElement);

  //Create the Second section that contains the content and append it to the main Section.
  const secondSection = document.createElement("section");
  secondSection.className = "content";

  //Create and append the Header 3 Element to the second cection element
  const header3 = document.createElement("h3");
  header3.textContent = "Card Title";
  secondSection.appendChild(header3);

  //Create and append the Paragraph Element to the second section element
  const paragraphTag = document.createElement("p");
  paragraphTag.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut remnesciunt illo veniam mollitia harum ea.";
  secondSection.appendChild(paragraphTag);

  //Create and append the Anchor Tag Element to the second section element
  const anchorTag = document.createElement("a");
  anchorTag.href = "";
  anchorTag.textContent = "Learn More";
  secondSection.appendChild(anchorTag);

  mainSection.appendChild(divElement);
  mainSection.appendChild(secondSection);
  document.body.appendChild(mainSection);
}
createCard();
///////////////////////////////////////////////////////////////////////////////////
//Apply the CSS style element to the JavaScript code.

const styleElement = document.createElement("style");
styleElement.innerHTML = ` 
body {
    background: #be4d30;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: sans-serif;
  }
  
  .card {
    position: relative;
    width: 30rem;
    height: 35rem;
    background-color: #be4d30;
    border-radius: 10px;
    box-shadow: 0px 30px 30px rgba(0, 0, 0, 0.5);
  }
  
  .content {
    position: absolute;
    bottom: 0px;
    width: 80%;
    height: 10px;
    background: #fb967c;
    left: 10%;
    text-align: center;
    transition: 0.5s;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;

    /* Added a blurred filter concept */
    backdrop-filter: blur(10px); 
    background-color: rgba(255, 255, 255, 0.2);  
  }
  
  h3 {
    font-size: 30px;
    margin: 25px;
    color: #be4d30;
  }
  
  p {
    width: 80%;
    margin: 10px auto;
    font-size: 18px;
    transition: 0.5s;
    opacity: 0;
    line-height: 25px;
    color: #fff;
  }
  
  a {
    text-decoration: none;
    background-color: #be4d30;
    color: #fff;
    padding: 10px 18px;
    display: inline-block;
    margin-top: 10px;
    transition: 0.5s;
    opacity: 0;
    line-height: 25px;
    color: #fff;
    border-radius: 26px;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    transition: 1s;
  }
  
  .card:hover .content {
    height: 100%;
    width: 100%;
    left: 0;
  }
  
  .card:hover p,
  .card:hover a {
    opacity: 1;
    transition-delay: 0.5s;
  }
  
  .img-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: 1s;
  }
  
  .card:hover img {
    opacity: 0;
  }
`;
document.head.appendChild(styleElement);
