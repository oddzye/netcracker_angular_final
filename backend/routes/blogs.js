const express = require('express');
const router = express.Router();
const passport = require('passport')
const controller = require('../controllers/blogs');


router.get('/', passport.authenticate('jwt', {session: false}), controller.getAll);
router.post('/:id', controller.getById);
router.delete('/:id', controller.remove);
router.post('/newBlog', controller.create);
router.patch('/:id', controller.update);

module.exports = router;