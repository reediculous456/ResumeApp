module.exports = {
  getUserSession: request => {
    return Promise.resolve(request.session.user);
  },
  setSession: (req, token) => {
    req.session.token = token;

    return Promise.resolve();
  },
  hasValidSession: req => {
    if (!req.session || !req.session.token) {
      return Promise.reject(`Invalid or no session`);
    }

    return Promise.resolve(req.session.token);
  },
  destroySession: req => {
    return new Promise((resolve, reject) => {
      delete req.session.token;

      req.session.destroy(err => {
        if (err) {
          return reject(err);
        }

        resolve();
      });
    });
  }
};