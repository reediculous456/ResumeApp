# resumeApp
## Installation
### 1. Clone Repo
    git@github.com:reediculous456/ResumeApp.git
### 2. Install dependencies
    npm install
### 3. Start Docker Containers
  * `docker run --name postgres -e PGDATA=/var/lib/postgresql/data/pgdata -e POSTGRES_PASSWORD=(...) -e POSTGRES_USER=(...) -v (folder on computer):/var/lib/postgresql/data -p 5432:5432 --restart=always -d postgres`
  * `docker run --name="redis" -d -p 0.0.0.0:6379:6379 redis`
### 4. Load Database
    `cat database.sql | docker exec -i postgres psql -U (username) -d "ResumeApp"`
### 5. Build
  #### Development mode
    npm run gulp-dev
  #### Production mode
    npm run gulp
### 6. Run
  #### Development mode
    npm run dev
  #### Production mode
    npm run start
# Resources

[BookshelfJS](https://travishorn.com/what-did-i-learn-this-week-knex-js-bookshelf-js-95d3490e3a6f)

[ExpressJS Generator](http://expressjs.com/en/starter/generator.html)

[ExpressJS](http://expressjs.com/en/4x/api.html)

[User Authentication through bCrypt](https://medium.com/@holtkam2/add-user-authentication-to-your-node-expressjs-application-using-bcrypt-81bb0f618ab3)
