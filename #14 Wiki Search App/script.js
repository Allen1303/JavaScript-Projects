"use strict";
const divContainer = document.createElement("div");
divContainer.className = "container";

const divHeaderContainer = document.createElement("div");
divHeaderContainer.className = "header-container";

const h1Element = document.createElement("h1");
h1Element.textContent = "Search Wikipedia";

const spanElement = document.createElement("span");
spanElement.id = "theme-toggler";
spanElement.innerText = "Light";

const formElement = document.createElement("form");
formElement.id = "search-form";

const inputElement = document.createElement("input");
inputElement.type = "text";
inputElement.id = "search-input";
inputElement.placeholder = "Enter search term";

const buttonElement = document.createElement("button");
buttonElement.type = "submit";
buttonElement.innerText = "Search";

const divSearchResult = document.createElement("div");
divSearchResult.id = "search-results";

// Append the search results Div, Button, and Input elements to the body of the document.
divContainer.appendChild(divSearchResult);
formElement.appendChild(buttonElement);
formElement.appendChild(inputElement);

divContainer.appendChild(formElement);
divHeaderContainer.appendChild(spanElement);
divHeaderContainer.appendChild(h1Element);
divContainer.appendChild(divHeaderContainer);

//Append The Div Container to the Body of the Document
document.body.appendChild(divContainer);

//Apply the Javascript Interactivity of the Application.

// Cache The DOM with the search form,search input, and search results elements by their IDs

const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const searchResults = document.getElementById("search-results");

//Get and set the Theme toggler elements
const themeToggler = document.getElementById("theme-toggler");
const body = document.body;

// Async Function to fetch th Wikipedia search results
async function searchWikipeida(query) {
  // Encode the search query to make it URL-safe
  const encodedQuery = encodeURIComponent(query);
  // Construct the Wikipedia API endpoint with the encoded query
  const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=10&srsearch=${encodedQuery}`;

  // Fetch data from the Wikipedia API
  const response = await fetch(endpoint);

  // Check if the fetch was successful
  if (!response.ok) {
    throw new error("Failed to fetch search results from Wikipedia API.");
  }
  // Parse the response as JSON and return it
  const json = await response.json();
  return json;
}
// Function to display search results on the page
function displayResults(results) {
  //Remove any existing content in the search results conatiner
  searchResults.innerHTML = "";

  // Iterate through each search result and create HTML elements
  results.forEach((result) => {
    // Generate The URL for the search result
    const url = `https://en.wikipedia.org/?curid=${result.pageid} `;
    // Create HTML elements for title and URL links
    const titleLink = `<a href=" ${url}" target="_blank" rel="noopener">${result.title}</a>`;

    const urlLink = `<a href="${url}" class="result-link" target="_blank" rel="noopener">${url}</a>`;

    //Create a new div element for each search result
    const resultItem = document.createElement("div");
    resultItem.className = "result-item";
    resultItem.innerHTML = `
    <h3 class="result-title">${titleLink}</h3>${urlLink}
    <p class="result-snippet">${result.snippet}</p>
    `;
    // Append the result item to the search results container
    searchResults.appendChild(resultItem);
  });
}
// Event listener for the search form submission
searchForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Get the trimmed value of the search input
  const query = searchInput.value.trim();

  // Check if the query is empty
  if (!query) {
    // Display a message if the search input is empty
    searchResults.innerHTML = "<p>Please enter a valid search term. </p>";
    return;
  }
  // Display a loading message while fetching search results
  searchResults.innerHTML = "<div class='spinner'>Loading...</div>";
  try {
    // Fetch search results using the searchWikipeida function
    const results = await searchWikipeida(query);
    // Check if there are no search results
    if (results.query.searchinfo.totalhits === 0) {
      // Display a message if no results are found
      searchResults.innerHTML = " <p>No results found.</p>";
    } else {
      // Display the search results on the page
      displayResults(results.query.search);
    }
  } catch (error) {
    // Log any errors to the console and display an error message
    console.error(error);
    searchResults.innerHTML = ` <p>An Error occurred while searching. Please try again later. </p>`;
  }
});

// Event listener for the theme toggler button
themeToggler.addEventListener("click", () => {
  // Toggle the "dark-theme" class on the body element
  body.classList.toggle("dark-theme");

  // Adjust the theme toggler button text and styles based on the theme
  if (body.classList.contains("dark-theme")) {
    // Change button text and styles for dark theme
    themeToggler.textContent = "Dark";
    themeToggler.style.background = "#fff";
    themeToggler.style.color = "#333";
  } else {
    //Change button text and styles for light theme
    themeToggler.textContent = "Light";
    themeToggler.style.border = "2px solid #ccc";
    themeToggler.style.color = "#333";
  }
});
/*================= CSS DYNAMIC STYLING==============*/
const styleElement = document.createElement("style");
styleElement.innerHTML = ` 
* {
    box-sizing: border-box;
  }
  
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
  }
  
  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
  }
  
  h1 {
    font-size: 3rem;
    margin-bottom: 2rem;
  }
  
  #search-form {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
  }
  
  #search-input {
    font-size: 1.2rem;
    padding: 0.5rem 1rem;
    margin-right: 1rem;
    border: 2px solid #ccc;
    border-radius: 10px;
    flex-grow: 1;
  }
  
  #search-input:focus {
    outline: none;
    border-color: #0074d9;
  }
  
  button[type="submit"] {
    font-size: 1.2rem;
    padding: 0.5rem 1rem;
    margin-right: 5px;
    background-color: #0074d9;
    color: #fff;
    border: none;
    border-radius: 10px;
    cursor: pointer;
  }
  
  button[type="submit"]:hover {
    background-color: lightblue;
    color: blue;
  }
  
  #search-results {
    margin-bottom: 2rem;
  }
  
  .result-item {
    margin-bottom: 1rem;
  }
  
  .result-title {
    font-size: 1.5rem;
    margin-top: 0;
  }
  
  .result-link {
    display: block;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    color: #0074d9;
  }
  
  .result-link:hover {
    text-decoration: underline;
  }
  
  .result-snippet {
    margin-top: 0;
  }
  
  .spinner {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    height: 10rem;
  }
  
  /* Dark theme */
  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  #theme-toggler {
    border: none;
    background: transparent;
    cursor: pointer;
    background: #e2e2e2;
    padding: 10px 20px;
    border-radius: 100px;
  }
  
  .dark-theme {
    background-color: #282c34;
    color: #fff;
  }
  
  .dark-theme #search-input {
    background-color: #454545;
    color: #fff;
    border-color: #fff;
  }
  
  .dark-theme #search-input:focus {
    border-color: #0074d9;
  }
  
  .dark-theme button[type="submit"] {
    background-color: #0074d9;
  }
  
  .dark-theme .result-link,
  .dark-theme .result-link:hover {
    color: #90caf9;
  }
`;
document.head.appendChild(styleElement);
