# Starter Repo for UI Projects


## Tools / Frameworks Used
 - Angular 1.4.0-rc.1
 - TypeScript 1.5.0-alpha
 - Angular2 Router / UI-Router - not sure which is the better choice at this date
 - Karma - test runner
 - Mocha - unit testing library
 - Chai - assertion library
 - Code Coverage - Istanbul
 - Gulp
 - Babel
 - Jspm for package management (Node modules are only used for gulp plugins)
 - Express.js - Used as a development server with proxy
 
## Tools / Frameworks I still need to add
 - ~~Angular2 Router / UI-Router - not sure which is the better choice at this date~~
 - ~~Karma - test runner~~
 - ~~Mocha - unit testing library~~
 - ~~Chai - assertion library~~
 - ~~Code Coverage - Istanbul~~
 - Code Analysis - Plato
 - Protractor - e2e testing framework. May put that in a separate project though.
 - tslint - A linter for TypeScript
 - Production Build
 - ~~Express.js - Used as a development server with proxy~~
 
 ## Getting started
 
 Assuming you already have NodeJS and npm installed...
 
  ```bash
  # Install gulp, jspm globally
  npm install gulp jspm -g
  
  # cd into the project root and install node dependencies
  npm install
  
  # then install jspm dependencies
  jspm install
  
  # run gulp to watch typescript files for changes and compile them
  gulp dev
  
  ```
  
  In a different terminal window start the supplied node server to run the project
  
  ```bash
  node server/server.js
  ```
  
  Open a browser window at http://localhost:8001