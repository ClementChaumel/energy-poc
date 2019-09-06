# Energy proof of concept

> What type of energy do _you_ use?

[![Netlify Status](https://api.netlify.com/api/v1/badges/4abbd05d-15f2-46ef-8a18-2a6cc50157d0/deploy-status)](https://app.netlify.com/sites/energy-poc/deploys)

This is an attempt at creating a website using the [JAMStack](https://jamstack.wtf/). It uses [NextJS](https://nextjs.org/#features) to export the app to a static site and uploads it on [Netlify](https://www.netlify.com/)'s CDN.

**[Check it out here!](https://energy-poc.netlify.com/)**

## Development setup

Install locally using

```sh
git clone git@github.com:ClementChaumel/energy-poc.git
cd energy-poc
yarn
```

Then run the dev server with

```sh
yarn dev
```

And the app will be running on http://localhost:5555/

---

You can also run the static version of the build using serve.

Install serve if you don't already have it

```sh
npm install -g serve
```

Then run

```sh
yarn export
cd out
serve -p 5555
```

And the generated static app will be running on http://localhost:5555/

## Technologies

Make sure to familiarise yourself with the tehchnologies used in this project:

- [NextJS](https://nextjs.org/learn/basics/getting-started)
- [Typescript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
- [Styled components](https://www.styled-components.com/docs/)

## Testing

We use [Jest](https://jestjs.io/) and [Cypress](https://www.cypress.io/) for our tests. As well as [ESLint](https://eslint.org/) for linting.

#### Unit tests

To run unit tests use:

```sh
yarn test:unit
```

We use snapshots with jest.
To update them, run

```sh
yarn test:unit -u
```

or

```sh
yarn update-snapshots
```

Don't forget to commit them!

#### End to end tests

Make sure you have the application running on port `5555` then run

```sh
yarn test:e2e
```

to open cypress test runner and watch them go.
If you only care about the outcome, instead run

```sh
yarn test:e2e:headless
```

If they fail you'll be able to see video recordings and screenshots in
`test/e2e/cypress/videos` and
`test/e2e/cypress/screenshots` respectively.

#### Linting

Simply run

```sh
yarn lint
```

to check your code against the rules.

##### Hooks

```sh
yarn test
```

Is a combination of unit tests and lint. I highly suggest you to add it to your `pre-commit` or `pre-push` hook to avoid the infamous "Fixing lint" commits

## What's next?

- Set up some CI for e2e test. (Lint and unit can be ran on netlify but not e2e).
- Find a way to get dynamic global nav + footer. I see two options:
  - Transform them in React components and put them in the component library.
  - Curl them at build time and somehow inject the html into the components. (I haven't been able to figure that one out yet)
- Connect to the backend API
- ???
- profit.
