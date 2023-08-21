var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).json({data: 'add data for the front page like a dashboard'})
});

module.exports = router;
