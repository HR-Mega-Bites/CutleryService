# Mega Bites : Cutlery Component

> Individual component and db, used to render the 'Tools' section within the Mega Bites application 

## Related Projects

  - https://github.com/HR-Mega-Bites/cutlery-service
  - https://github.com/HR-Mega-Bites/menu-service
  - https://github.com/HR-Mega-Bites/review-service
  - https://github.com/HR-Mega-Bites/cooking-service

## Table of Contents
1. [Getting Started](#getting-started)
1. [Usage](#usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Getting Started
After cloning down this repo, a few steps need to be taken to get it fully functional:
1. [install dependancies](#installing-dependencies)
2. Start up your postgreSQL server (assumming already downloaded and create a 'megabites' database 
 ```
 psql postgres -U <YOUR USER OR POSTGRES>
 postgres=# CREATE DATABASE megabites;
 ```
3. Change the user in the server/db.js file to be your db user. 
4. set up the database with the schema
```
psql megabites < ./server/schema.sql
```
5. seed the database
```
node seed/seed.js
```
6. start up the node server and webpack
```
npm webpack
nodemon
```
7. profit!!

## Usage

To use componenet in your own work, add the following lines to your HTML:
```html
<link 
  rel="stylesheet" 
  href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" 
  integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
  crossorigin="anonymous"
  >
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>

<script src="http://localhost:3000/bundle.js"></script>
```
the React 'App' componenent will then be available for use in additional script tags.

### Example use to render an App component in the tools div
```html
<body>
    <div id="tools"></div>
    <script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script src="http://localhost:3000/bundle.js"></script>
    <script>
      console.log(App)
      ReactDOM.render(
        React.createElement(App),
        document.getElementById('tools')
      );
     </script>
  </body>
  ```

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

