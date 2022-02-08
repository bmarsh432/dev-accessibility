# Developer accessibility tools example

The ESLint config (eslintrc.json) and @axe-core/react config (index.tsx) are commented out and need adding for those to work

To run the project:

### `yarn install`

### `yarn start`

To run the tests:

### `yarn test`

To run the linter:

### `yarn run lint`

To run the Lighthouse CI locally:

### `lhci autorun`

App.tsx contains 2 sections of code, the current version is the one that has accessibility issues, the commented out code contains fixes.

This repo includes the following tools:

## ESLint

https://github.com/jsx-eslint/eslint-plugin-jsx-a11y

## @axe-core/react

https://github.com/dequelabs/axe-core-npm

## jest-axe and react-testing-library

https://github.com/nickcolley/jest-axe

## Lighthouse CI

@lhci/cli needs installing before this will run, instructions can be found in their repo

https://github.com/GoogleChrome/lighthouse-ci
