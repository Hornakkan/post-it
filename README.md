# post_it

Post-it project for Coding Academy 2022


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

<img src="https://lh3.googleusercontent.com/mG5bh42fw8ABfE94Vdr_q1bNrpj9qelftoekJnE7YlviLpYGY-NtZ9s2IRBT_JdAMRuYuy08LLT5S-Ug3KEwcWDOhLOObbm4lGfsTI1frTXopXL85y2zGqVzbMYfsRAlr_7MFxCeWnsW9OGCLWF8dI0AWnOvmfAb7zL9M4qJHiwFO0MnFTJdhinCEla0VMwpSE9EHUNczl6FuQpJaYu4VTCYR2eRCU11mVL2hKGZyP2GiO_-m29_Z9oV7DraG7NfcJv9TwlQzul6CnHSOcH31XJXlCmJzV52W7p_K6PlWLjjEKHrTnIl67JEKw4ywwHcL7pAyzgIuw2eZHaCxWQXvOMnlZXk0pCwvKS49-Lg_EBSaxQGfRGA3hAiLPkKO40u39UjAAzBdsONEUCtTAIPiGSUY2KPKxWTF5wohAeNHZvFLkw-mYVmDozSb-tFkLn21WOlUHymWdQEtvtGVBM4k8UQNh4swRAtRXnFLVHLECzGj7ryVRKGfTseLscUHdYUgtnW_iu_7C_nHlGPnXblLthHjC9O9wqTGQrEBwPRkMNZ8OnOz18kQCofwv-brXzyRbmmkQk7THj0l9ZDDdZKg_CZTgX4RXgwzXOclStmOcn1YLYe_yJooqza1m_vhTqK2-5CVp_roSyRTF-ZYdRR9_eRErp9GEu4Xl3dxEfySsNylaF6VeSoIkc682Wqid-j706iAQt4taUG7IHy6f3OSGOTsBPZ8lLVtRd_zrxgkorfEeANdtqUKci_orxjCQ=w1919-h932-no?authuser=0" />

<img src="https://lh3.googleusercontent.com/LvUthmP1gZ9vlnsP0CcaiLLu44lnmO5C8tFoZv2TqKfmbhGj6IH8Tfat-gb30mAD04PDhrXeKY6ZUGg4MIZpVT3hFhKySlpOR2moyfCManr_jspeRaFHeNDfhaI1EmUwLuvZaSDaprSZei_dJYIDWVjUI2vAsiB-7VJlJKaiEuxCqQ3M2WFXCKZuv-HDV1Oc7oBXnskL6lXQ1J7KntaOJYkMwHzxeP44nI4oDTyNivNJZXBJIBo96kWlEtzdxVDLJFaG6d8PoOgIhl8NVT5V0Wr2DHVy3AN6_5bD93Mg7PC4MiFwCgukVb5qOme0c7zERxZeuHoZMd4ybEvaDxF9u6HEl1_d4-n_m6VYDwoP7-aV0r9zIhH6bqlxXSAkoU6XBAPKTH8i1Dihi2y7A8fXhkN7YW-T9qgTo8I_R4nD3VGuHpOg6YofJoRjj8IXPSDrdrVmZoujlJld-JZLOMDAvDthpGNjQP5OujFrlV9LTGel0gdANgfQn79X7niaz9eZcd1edhWgtlNt5lbYsB1sKdI__8yTg1YucLTUIJpqUeRubKKlRnuaXxbfhMmeQgQ4jlmVhz2ZFw3AIywao-zsWkq7AjU43FZn9VBCRZFV5eQadrxXex56RKMZj0kHIbGk0pNv0iy0lDMM7kAnN7e3DNgtt8sqrwVpFTMgRj_mU2YjvfiBicciBGt-d3FywNNB3zuiEfD16iN9Os2qSwyZBHDWk7i4uy0-ux-LJ-ICoamiy4fAld03fLXiCJdurQ=w898-h472-no?authuser=0" />

<img src="https://lh3.googleusercontent.com/UPoOLeURiBkuIKv6OrcaNbV3IkP9ewskF2aB5TulMFe1sMyfwMnrIzwgVJm12IZwyjQ-id31pfan_4rnUhDtVm-n8hRrbL6w2hr2vwoKWcRJxwaszOBIoqYBEkT7VsA2ZeIt0BhJ0qeIKYscZMdsJGdv87m1-O3wU0t0xvNqRG2X6NkK-vPOwErFQ8IHb1FyhdJvju1ZnH-F1FspObvrgbxZ0FtvSGufaFq0hSU7idwBTZQRweNLaffFmh0k1C9tnKFqD40MV0sl6wTMjUWepQrdmwjC5h0b3FbLWmf8BCwt8KT9t3sgz_Z5hTL7kGDC7cM9vI7qWV7Q231p_7cxLTGqbiekdfa2A8WOofcDg3R8buh2uHuflXSlhmfu43cO0lqbLVugqJuwvjLU7l4vblorbItxeJoxHUos48ZEj0SBzhk7a4_Ah6GrD4Cc1h9VOB9NBw1rQ9h6phQv5BpkXL1bn-0fBd88yVrcdwxV11vnQ5qF7KGdwcr8Mp-qNlDXU6KDAIPpU7J5r7Y4uRGbVzLf2ev1Y41zRmCK391S_g23ltvc0ud-dwMEoj4wByoM5_mUl5NySPFS1SkymOnF4w0Knm53jthMjCWIlnGRoA37P_1BmFPM9A2QelNZagUioTX-SvwPksG6FdX0TA8aiQT_anbxp_yhenjk3DBK1SafjA5pxuJ5lhymV1DsmKzDUy_EEazOuQHNtG-vsgOCgRzg0ID8d-k5L79SA7on_84KADjw7nJxftI5txRwsw=w1916-h930-no?authuser=0" />


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
