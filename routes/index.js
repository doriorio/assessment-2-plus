var express = require('express');
var router = express.Router();
var hobbiesCtrl = require('../controllers/hobbies')

/* GET home page. */
router.get('/', hobbiesCtrl.index);
router.post('/hobbies', hobbiesCtrl.new);
router.get('/:id', hobbiesCtrl.show);
router.delete('/:id', hobbiesCtrl.delete)
router.put('/:id', hobbiesCtrl.update)

module.exports = router;
