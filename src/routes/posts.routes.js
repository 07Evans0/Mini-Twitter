const express = require('express');
const router = express.Router();
const {create} = require('../controllers/posts.controller');

router.post('/posts', (req, res) => {
    res.send('post created')
}); 

module.exports = router