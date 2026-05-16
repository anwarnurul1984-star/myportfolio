const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('layouts/main', {
    title: 'Md Nurul Anwar | Trade & Travel',
    body: 'pages/home'
  });
});

module.exports = router;
