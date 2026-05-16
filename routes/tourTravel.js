const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('layouts/main', {
    title: 'Kurnia Holiday Travels | Tour & Travel',
    business: 'tour-travel',
    body: 'pages/tour-travel'
  });
});

module.exports = router;
