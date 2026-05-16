const express = require('express');
const path = require('path');

const indexRouter = require('./routes/index');
const importExportRouter = require('./routes/importExport');
const tourTravelRouter = require('./routes/tourTravel');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/import-export', importExportRouter);
app.use('/tour-travel', tourTravelRouter);

app.use((req, res) => {
  res.status(404).render('layouts/main', {
    title: '404 - Page Not Found',
    body: 'pages/404'
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
