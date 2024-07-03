# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](interactive-rating-component-main/design/desktop-design.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- HTML5
- CSS
- Flexbox
- JavaScript

### What I learned

This interactive evaluation project allowed me to develop my programming logic to solve the challenge. Even though it is simple, it greatly enhanced my learning. I used HTML, CSS, and JavaScript, and also developed a mini library in CSS for styling colors, fonts, and some standard styles.

To see how you can add code snippets, see below:

The mini library: 
```css
@import url('https://fonts.googleapis.com/css2?family=Overpass:ital,wght@0,100..900;1,100..900&display=swap');

:root {
    --White: hsl(0, 0%, 100%);
    --Light-Grey: hsl(217, 12%, 63%);
    --Dark-Blue: hsl(213, 19%, 18%);
    --Very-Dark-Blue: hsl(216, 12%, 8%);
    --Orange: hsl(25, 97%, 53%);
}

* {
    padding: 0;
    margin: 0;
    font-family: "Overpass", sans-serif;
    color: var(--White);
}
```

Improvement in DOM knowledge:
```js
const template = `
            <div class="give-feedback">
                <input type="text" placeholder="Nos conte sobre sua experiência">
                <button id="send">
                    <img src="images/send-svgrepo-com.svg" alt="send-svgrepo-com">
                </button>
            </div>`;

            const parser = new DOMParser();
            const templateHTML = parser.parseFromString(template, 'text/html');

            const giveFeedback = templateHTML.querySelector('.give-feedback');

            thankYou.appendChild(giveFeedback);
```
