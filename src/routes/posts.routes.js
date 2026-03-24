const express = require('express');
const router = express.Router();

router.post('/posts', (req, res) => {
    res.send('post created')
}); 

module.exports = router