# AmberWest Digital

This repository contains the source code for a responsive, multi-page static website for a fictional creative agency called "AmberWest Digital." It was created as a proof-of-concept to learn and demonstrate modern frontend development practices, specifically Bootstrap.

## Technology Stack

*   **Build Tool:** [Vite](https://vitejs.dev/)
*   **CSS Framework:** [Bootstrap 5](https://getbootstrap.com/)
*   **CSS Preprocessor:** [Sass (SCSS)](https://sass-lang.com/)
*   **CSS Optimization:** [PostCSS](https://postcss.org/) with [PurgeCSS](https://purgecss.com/)
*   **HTML Templating:** [Handlebars](https://handlebarsjs.com/) (via `vite-plugin-handlebars`)
*   **JavaScript:** Vanilla ES Modules

## Project Structure

The main entry point for the site's styling is located at:
`src/scss/styles.scss`

This file imports Bootstrap and all custom Sass partials, which are then processed by Vite during the build.

## Getting Started

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/amberwest-web.git
    cd amberwest-web
    ```

2.  **Install dependencies:**
    ```sh
    npm install
    ```

3.  **Run the development server:**
    ```sh
    npm run dev
    ```
    This will start a local development server and open the site in your browser.

4.  **Build for production:**
    ```sh
    npm run build
    ```
    This will create a `dist` folder with the optimized, production-ready files.
