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

//Get Single Task
router.get('/task/:id', function(req, res, next) {
	db.tasks.findOne({_id:mongojs.ObjectId(req.params.id)},function(err, task) {
		if(err) {
			res.send(err);
		}
		res.json(task);
	})
});

module.exports = router;