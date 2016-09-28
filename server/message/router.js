

var express = require('express');
var router = express.Router();
var controller = require('./controller.js');

module.exports = router;

router.use(function(req, res, next){
	next();
});

router.get('*',
		   controller.redirect_to_socket
		  );
