var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://JohnC:rednef1500@ds143362.mlab.com:43362/quicknode_john', ['tasks']);

router.get('/tasks', function(req, res, next) {
	db.tasks.find(function(err, tasks) {
		if(err) {
			res.send(err);
		}
		res.json(tasks);
	})
});

module.exports = router;