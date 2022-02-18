# Frontend Mentor - Profile card component solution

This is a solution to the [Profile card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/profile-card-component-cfArpWshJ). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

- Build out the project to the designs provided

### Screenshot

- Desktop: 1440px
![Desktop Version](./images/screenshots/desktop-version.png)

- Mobile: 375px
![Mobile Version](./images/screenshots/mobile-version.png)

### Links

- Solution URL: [My solution](https://www.frontendmentor.io/solutions/profile-card-component-finally-with-flexbox-boV4cast7)
- Live Site URL: [Profile Card Component](https://luanflorencioo.github.io/Profile-card-component/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Javascript
- Media Queries

### What I learned

I was able to put into practice the background image manipulation to adapt to the user's screen with `background-position`.

```css
/* ./styles/styles.css - line 3 */
@media (max-width: 600px) {
    body {
        background-size: 200vw, 200vw;
        background-position: calc(-200vw/1.4) calc(-200vw/1.7), 45vw 50vh;
    }
}
@media (min-width: 601px) {
    body {
        background-size: auto, auto;
        background-position: calc(-976px + 50vw) calc(-976px/2), 50vw 50vh;
    }
}
```

In this project I used the `calc()` functionality in css a lot.

```css
/* ./styles/styles.css - line 90 */
footer {
  height: 8%;
  position: absolute;
  left: calc(50% - 195.656px/2);
}
```

already in the animation of the numbers increasing, I take advantage of the `setTimeOut()` in javascript.

```javascript
// ./assets/script.js - line 17
const addValueFast = setInterval(() => {
  statistic.innerText = `${n += 13}K`
  if (n >= totalValue) {
      clearInterval(addValueFast);
      statistic.innerText = `${totalValue}K`
  }
}, 50);
```
## Author

![Luan Florêncio](https://avatars.githubusercontent.com/u/71609088?s=120&v=4)

_Luan Florêncio_

- GitHub - [LuanFlorencioo](https://github.com/LuanFlorencioo)
- Frontend Mentor - [@LuanFlorencioo](https://www.frontendmentor.io/profile/LuanFlorencioo)
- Twitter - [@LuanF_dev](https://www.twitter.com/LuanF_dev)