# WCAG 2.1 A Developer accessibility tools example

This version incorporates linting configurations for WCAG A and other recommended rules for that plugin.  Also @axe-core/react config for WCAG A.

To run the project:

### `yarn install`

### `yarn start`

To run the tests:

### `yarn test`

To run the linter:

### `yarn lint`

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
