var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var User = require('../models/user');

const { body, validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

/* GET users listing. */
router.route('/')
	.post(function (req, res) {
		/*body('uName', 'Empty First Name').trim().isLength({ min: 1 }),
		body('pWord', 'Empty Last Name').trim().isLength({ min: 1 }), 
		sanitizeBody('uName').trim().escape(),
		sanitizeBody('pWord').trim().escape();
		const errors = validationResult(req);*/
		//console.log('Starting');

		User
   /*.where('username', req.body.uName)
   .fetchOne().then(function (found) {
      users = found;
      console.log(users.toJSON());
  });*/.fetchAll()
			.then(function (collection) {
				var users = collection.toJSON();
				var hash = "";
				for (var i = 0; i < users.length; i++) {
					if (users[i].username === req.body.uName) {
						hash = users[i].password;
						//onsole.log('name ' + users[i].username + ' pword ' + users[i].password);
						break;
					}
				}
				bcrypt.compare(req.body.pWord, hash).then(function (result) {
					if (result) {
						res.json({ 'status': 'success' });
					}
					else {
						res.json({ 'error': 'Password did not match ', 'username': req.body.uName });
					}
				});
			}).catch(function (err) {
				res.status(500).json({error: true, data: {message: err.message}});
			});
	});

module.exports = router;