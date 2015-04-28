# Starter Repo for UI Projects


## Tools / Frameworks Used
 - Angular 1.4.0-rc.1
 - TypeScript 1.5.0-alpha
 - Gulp
 - Traceur
 - Jspm for package management (Node modules are only used for gulp plugins)
 
## Tools / Frameworks I still need to add
 - Angular2 Router / UI-Router - not sure which is the better choice at this date
 - Karma - test runner
 - Mocha - unit testing library
 - Chai - assertion library
 - Code Coverage - Istanbul
 - Code Analysis - Plato
 - Protractor - e2e testing framework. May put that in a separate project though.
 - tslint - A linter for TypeScript
 - Production Build
 - Express.js - Used as a development server with proxy
 
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
  
  In a different terminal window start a static http server with the PROJECT_ROOT/app as the webroot
  
  ```bash
  # python simple http server
  python -m SimpleHTTPServer 8080
  
  # or nodes http-server if you have it installed globally
  http-server
  ```
  
  Open a browser window at http://localhost:8080, you'll see nothing :)