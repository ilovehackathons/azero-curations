# AzeroCurations

The `master` branch only contains the backend code. Check the `main` branch for the full code. The frontend is deployed to https://azero-curations.vercel.app/

azero.curations – Zero-Knowledge negative reputation (Hackathon)
\*\*ZK Decentralised posts for DAOs

## Getting Started

Check https://paritytech.github.io/ink/ for the commands relative to smart contracts

## Development

## Deployment

We have developed a voting system where the user is being casted by votes from anonymous voters.

We have created a smart **governance** contract using ink.
We have created the token representing the votes **psp22token**
We are using the blender to allow users to anonymise their votes.

Architecture :

- 1/ register a new token in the contract (copy TokenID).
- 2/ Deposit token in the contract (use CLI - > generates Zk-Proofs)
- 3/ Mapping : TokenID is that corresponds to a given token.
- 4/ voting/DAO contract should accept transactions coming from the blender (voting = withdrawal from the blender).
- 5/ Blender contract : 5ExdeNmh3c7kXpx9uE4M9T63z19KZNAPSyGMfE5zPXeBUryj

## Smart contracts

`cargo +nightly contract build` :

## Smart contracts

`cargo +nightly contract build` :
Compiles the contract into optimized WebAssembly bytecode, generates metadata for it, and bundles both together in a <name>.contract file, which you can use for deploying the contract on-chain.

## Devpost Description

### Inspiration

### What it does

### How we built it

#### Frontend

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
` cargo +nightly contract build --optimization-passes=0 --release` :
Compiles the contract into optimized WebAssembly bytecode, generates metadata for it, and bundles both together in a <name>.contract file, which you can use for deploying the contract on-chain.

### Inspiration

We have being inspired by Vitalik article ZK negative reputation : https://vitalik.ca/general/2022/06/15/using_snarks.html

### How we built it

We have used rust for smart contracts.

#### Frontend

- The project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- [Tailwind CSS](https://github.com/tailwindlabs/tailwindcss) was added for styling.
- We use [@polkadot/extension-dapp](https://polkadot.js.org/docs/extension/usage) to connect with the [polkadot{.js} extension](https://github.com/polkadot-js/extension).
- The screens were [designed in Figma](https://www.figma.com/file/MUhnEtOwSwOK0ztr6MM7UZ/) before being implemented.
