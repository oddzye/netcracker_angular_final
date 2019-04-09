const express = require('express');
const router = express.Router();
const passport = require('passport')
const controller = require('../controllers/blogs');


// router.get('/', passport.authenticate('jwt', {session: false}), controller.getAll);
// router.get('/', controller.getAll);
router.post('/update', controller.update);
router.delete('/:id', controller.remove);
router.post('/newBlog', controller.create);
// router.patch('/:id', controller.update);

module.exports = router;