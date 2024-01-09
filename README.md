# Casino Website

## Overview

This project is a casino website built with React and Redux. It includes features such as user authentication, game selection, and category filtering. The project structure follows a modular approach to enhance maintainability and scalability.

- The Desktop Screen is look like this

  https://github.com/mute-o-rehman/comeon-test-app/blob/master/public/images/screenshots/desktop-lobby-view.png

- The Mobile device View is look like this

  https://github.com/mute-o-rehman/comeon-test-app/blob/master/public/images/screenshots/mobile-view.png?raw=true

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Dependencies](#dependencies)
- [Testing](#testing)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mute-o-rehman/comeon-test-app.git

   ```

2. Change to the project directory:
   cd comeon-test-app
3. Install dependencies:
   npm install

## Usage

1. start the development server and run the application locally:
   npm start
   Visit http://localhost:3000 in your web browser to view the application

2. strat mock data API use json.server by run following command:

   json-server --watch mock/mock-data.json --port 3001 --middlewares mock/mock-api.js

## Folder Structure

The project follows a modular structure for better organization:

- src/components: Contains React components.
- src/redux: Manages the Redux state, actions, reducers and store.
- src/redux/actions: Defines action creators for Redux.
- src/redux/reducers: Implements reducers for the application state.
- src/redux/store: Define store for the application state management.

## Dependencies

List the main dependencies and their versions. Include information on how to install them.

- React
- Redux
- Semantic UI
- json-server

## Testing

    run tests and provide information on the testing framework used.
      npm test
