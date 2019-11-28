const jwt = require(`jsonwebtoken`);
const config = require(`config`);

const TokenService = {
  generate: (payload, expiresIn = config.get(`token.expiration`)) => {
    const signKey = config.get(`token.signingKey`);
    return jwt.sign(payload, signKey, { expiresIn });
  },
  decode: (token) => {
    return new Promise(resolve => {
      const signKey = config.get(`token.signingKey`);
      const decodedToken = jwt.verify(token, signKey);
      resolve(decodedToken.user);
    });
  },
};

module.exports = TokenService;
