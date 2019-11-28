const config = require(`config`);
const express = require(`express`);
const app = express();
const server = require(`http`).Server(app);
const { IndexRoute, RouteLoader, SessionManager } = require(`./utils`);
const moment = require(`moment`);
const cookieParser = require(`cookie-parser`);
const session = require(`express-session`);
const RedisStore = require(`connect-redis`)(session);
const bodyParser = require(`body-parser`);
const boolParser = require(`express-query-boolean`);
const compression = require(`compression`);

const sesh = session({
  store: new RedisStore({
    host: config.cache.host,
    port: config.cache.port,
    pass: config.cache.pass
  }),
  secret: config.cache.sessionKey,
  resave: true,
  saveUninitialized: true,
  ttl: config.cache.ttl || 86400
});

app.use(sesh);
app.use(compression());
app.set(`view engine`, `ejs`);
app.set(`views`, `${__dirname}/../views`);

app.use(bodyParser.json({ limit: `50mb` }));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(boolParser());
app.use(cookieParser());
app.use(express.static(`${__dirname}/../public`));

app.use((req, res, next) => {
  SessionManager
    .getUserSession(req)
    .then(user => {
      res.locals.moment = moment;
      res.locals.config = config;
      res.locals.formatBytes = (bytes, decimals = 2) => {
        if (bytes === 0) {
          return `0 Byte`;
        }
        const k = 1000;
        const dm = decimals + 1 || 3;
        const sizes = [ `Bytes`, `KB`, `MB`, `GB`, `TB`, `PB`, `EB`, `ZB`, `YB` ];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return `${(bytes / Math.pow(k, i)).toPrecision(dm) } ${ sizes[i]}`;
      };
      res.locals.user = user;
      next();
    })
    .catch(() => {
      next();
    });
});

RouteLoader(app)
  .then(() => {
    app.all(`/*`, IndexRoute);

    server.listen(config.server.port || 80);
    console.log(`Listening on port: ${config.server.port || 80}`); //eslint-disable-line no-console
  })
  .catch((err) => {
    console.log(`Failed to start application`); // eslint-disable-line no-console
    console.log(err.stack); // eslint-disable-line no-console
    process.exit(1);
  });