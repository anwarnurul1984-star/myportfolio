const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('layouts/main', {
    title: 'H. S. Enterprise | Import & Export',
    business: 'import-export',
    body: 'pages/import-export'
  });
});

module.exports = router;
