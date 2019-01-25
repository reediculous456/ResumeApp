# resumeApp
## Installation
### 1. Clone Repo
    git@git.uc.edu:reedws/resumeApp.git
### 2. NPM Install
    cd ./resumeAppYo 
    npm install
    cd ./resumeappAPI
    npm install
### 3. Bower Install
    cd ./resumeAppYo
    bower install
### 4. Install Postgres SQL
Install Postgres sql and restore database
    resumeappdb
using the file
    resumeappdb.sqlc
### 5. Run
    cd ./resumeAppYo
    grunt serve 
    cd ./resumeAppAPI
    nodemon
# Resources
https://github.com/yeoman/generator-angular
    Must add &lt;base href="/"&gt; to index.html and $locationProvider.html5Mode(true); to app.js inside .config

https://travishorn.com/what-did-i-learn-this-week-knex-js-bookshelf-js-95d3490e3a6f

http://expressjs.com/en/starter/generator.html

http://expressjs.com/en/4x/api.html

https://medium.com/@holtkam2/add-user-authentication-to-your-node-expressjs-application-using-bcrypt-81bb0f618ab3
