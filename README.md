# post_it

<b>Post-it project for Epitech school: Coding Academy 2022.</b>


Wrap up: 
- create a website with Vue.js that allows user to create and edit notes
- understand component interaction

What I did in a nutshell: 
- created a main component mounted through the App as an "Index" page
- on the index you'll find all notes created by user (if set), a create new note button, a filter/search bar, a reset filter button and a header
- header will let you know how many notes are remaining
- filter/search bar will auto-execute after losing focus or on "enter" key
- the view-edit button on each note will load a dedicated view component and display the note's title + full content
- each note displayed ont the index page can be sorted by drag an drop
- warning messages when trying to create an empty note or a note without title or content
- responsive design
- usage of SASS for clean CSS
- some Unit Tests under the PostIt.test.js file
- design suitable for both office and personal usage

<img src="https://lh3.googleusercontent.com/pw/AL9nZEW789rlAKk2GiiV9l8HLfe7Nx-QyyqfUPqTo3bIiDrh1Cx6JUOchRZMR0ih7z5CykBTkouTle9jusphMa4xXmQ8H2qL0IJl3Jydp0I6U1JNFB_pWO2h8BwLw5gsSEPkPd1fQ9DB3KIc9n_EwNcVfoUY=w1919-h932-no?authuser=0" />

<img src="https://lh3.googleusercontent.com/pw/AL9nZEWPQW_p06nHIQyHSbosX1KiZyEz0vQjIKDB_PPCNj2xW1BkGRocN_EtQhDPJNuAVbtxOthZ4nUC7gAPHCNJZgLc9o4cmecM-7dRhRs_6VzRoD12QQaUOqtigT12J6orwt5ZYCRAGMXSZQ5bvY4AQa9d=w898-h472-no?authuser=0" />

<img src="https://lh3.googleusercontent.com/pw/AL9nZEW5ZOmwFH7vvG9UXmqvAnouDVzjzKF1mx8L2W79jm6sU_2awGNSi7VcDlhkybDwc3F0i29K8_muigStbjCSGmrB1M8d_g87z_aJeJkxcu6JpyeDHGeosNSGzE9NFIIsZIlpH4JXWyQV71aKhVSiXHsa=w1916-h930-no?authuser=0" />


This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run build
npm run test:e2e # or `npm run test:e2e:ci` for headless testing
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
