// 1. Step: Create the Basic HTML Structure

// 2. Step: Create the <section> Element with the hero Class
const heroSection = document.createElement("section");
// Set the className attribute to "hero" to give it the "hero" class.
heroSection.className = "hero";
document.body.appendChild(heroSection);

/* Step 3: Create the <video> Element */
const videoElement = document.createElement("video");
videoElement.className = "background-video";
/* Set its attributes by using the setAttribute method:
autoplay, loop, muted, and playsinline should be set to true. */
videoElement.setAttribute("autoplay", true);
videoElement.setAttribute("loop", true);
videoElement.setAttribute("muted", true);
videoElement.setAttribute("playsinline", true);
heroSection.appendChild(videoElement);

// Create a source element as a child of the video element using the createElement method.
const sourceElement = document.createElement("source");
sourceElement.src = "images/Background-vid.mp4";
videoElement.appendChild(sourceElement); // Append the sourceElement to the videoElement

// Step 4: Create the Second <section> Element with the content Class
const contentSection = document.createElement("section");
contentSection.className = "content";
heroSection.appendChild(contentSection);

const h1Element = document.createElement("h1");
h1Element.textContent = "Journey";
contentSection.appendChild(h1Element);

const aElement = document.createElement("a");
aElement.href = "#"; // Set the href attribute to "#" or the desired URL
aElement.textContent = "Explore";
contentSection.appendChild(aElement);

const head = document.head;
const style = document.createElement("style");
style.innerHTML = `
    :root {
        --color-primary: dodgerblue;
        --color-secondary: whitesmoke;
        --font-size-h1: 4rem;
        --font-size-a: 1.5rem;
        --border-radius: 30px;
    }

    @import url('https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900&display=swap');

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }

    .hero {
        width: 100%;
        height: 100vh;
        background: linear-gradient(rgba(12, 3, 51, 0.3), rgba(12, 3, 51, 0.3)),
            url('path/to/background-image.jpg') no-repeat center center/cover;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .content {
        text-align: center;
    }

    .content h1 {
        font-size: var(--font-size-h1);
        color: var(--color-secondary);
        font-weight: 600;
        transition: 0.5s;
    }

    .content h1:hover {
        -webkit-text-stroke: 2px var(--color-secondary);
        color: transparent;
    }

    .content a {
        text-decoration: none;
        display: inline-block;
        color: var(--color-secondary);
        font-size: var(--font-size-a);
        font-weight: 600;
        border: 2px solid var(--color-secondary);
        border-radius: var(--border-radius);
        padding: 10px 30px;
        margin-top: 20px;
        transition: 0.5s;
    }

    .content a:hover {
        background-color: var(--color-secondary);
        color: var(--color-primary);
        font-weight: 600;
    }

    .background-video {
        position: absolute;
        right: 0;
        bottom: 0;
        z-index: -1;
    }

    @media screen and (max-width: 768px) {
        .content h1 {
            font-size: calc(var(--font-size-h1) * 0.7);
        }
        .content a {
            font-size: calc(var(--font-size-a) * 0.8);
            padding: 0.8em 1.5em;
            margin-top: 1.5em;
        }
    }

    @media screen and (max-width: 480px) {
        .content h1 {
            font-size: calc(var(--font-size-h1) * 0.5);
        }
        .content a {
            font-size: calc(var(--font-size-a) * 0.7);
            padding: 0.5em 1em;
            margin-top: 1em;
        }
    }

    @media screen and (max-width: 320px) {
        .content h1 {
            font-size: calc(var(--font-size-h1) * 0.4);
        }
        .content a {
            font-size: calc(var(--font-size-a) * 0.6);
            padding: 0.3em 0.8em;
            margin-top: 0.5em;
        }
    }
`;

head.appendChild(style);
