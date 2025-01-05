# SoundGap
SoundGap is a Vue.js-based application for a hypothetical website selling music-related items. The app is built using Vue.js, styled with Tailwind CSS, and utilizes Vite for fast development.

## Core Features:
### 1. Navigation Bar:
* Responsive navigation bar for seamless section transitions.
* Modern hamburger menu for mobile-friendly design.
### 2. Hero Section:
* Eye-catching section with title, tagline, and CTA button.
### 3. Review Section:
* Feedback form for users to submit reviews and ratings.
* Dynamically displayed reviews based on user submissions.
### 4. Footer:
* Essential links and contact details.
## Main Tasks Implemented:
### 1. Dynamic Product Catalog with Filtering System:
* Products are dynamically fetched from a local JSON file.
* Users can filter products by category and price range.
### 2. Reviews and Ratings System:
* A review form collects user feedback and ratings.
* User-submitted reviews are displayed dynamically.
### 3. Gallery with Dynamic Image Viewing:
* Image gallery with zoom functionality via scroll wheel.
* Navigate through images with sidebars or keyboard arrows.
* Slideshow functionality for images.
## Technologies Used:
* Frontend Framework: Vue.js
* Styling: CSS & Tailwind CSS
* Build Tool: Vite
* Scripting Language: JavaScript
## Installation and Setup:
### 1. Vite:
####  To set up a Vite + Vue project: 

 cmd <br>
$ npm create vite@latest my-vue-app -- --template vue <br>
$ cd my-vue-app <br> 
$ npm install <br> 
$ npm run dev <br> 

#### After this, the project will be ready to be opened with Visual Studio Code. <br>

### 2. Tailwind CSS: <br>
####  Install Tailwind CSS using NPM: <br>

cmd <br>
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest <br>
####  Create a Tailwind configuration file: <br>

cmd <br>
npx tailwindcss init -p <br>
#### Update tailwind.config.js: <br>
 
content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'] <br>
#### In your style.css, replace everything with: <br>

@tailwind base; <br>
@tailwind components; <br>
@tailwind utilities; <br>

### 3. AOS (Animate on Scroll Library): <br>
#### Install AOS: <br>

cmd<br>
npm install aos --save <br>

### 4. Vue 3 Carousel: <br>
#### Install Vue 3 Carousel: <br>

cmd <br>
npm i vue3-carousel <br>
## Design Choices:
The design aims for an eye-friendly experience, incorporating a Neon City Theme with a color palette of dark/light purple, black, and pink. The interface is designed to be visually appealing during both day and night.

### The website simulates a small music shop with:

* 12 products in 5 categories, including a price filter.
* A review section where feedback is stored in LocalStorage and displayed dynamically.
* A gallery with interactive images that can be zoomed in, switched using sidebars or keyboard arrows, and viewed in slideshow mode.
## Extra Features:
* Employee Directory: The directory is not displayed by default but can be shown by uncommenting the Register part in App.vue.
* Dark/Light Mode: Though partially implemented, the button only affects the product section (product name and shopping cart).
* ToTopButton: Clicking this button will scroll the page back to the top.
## Notes:
There are commented-out sections for features that didn’t fit the final design but can be uncommented for experimentation, such as the Employee Directory and the Dark/Light Mode and other stuff that was the starting plan for some objectives.

