const express = require('express');
const path = require('path');
const db = require('./config/connection');
const routes = require('./routes');
const cookieParser = require('cookie-parser')

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

app.use(routes);

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, "..", 'client/dist')));

  app.get('/*', (req, res) => {
    res.sendFile(path.resolve( __dirname, "..", 'client/dist/index.html'))
  })
}


db.once('open', () => {
  app.listen(PORT, () => console.log(`Now listening on localhost: ${PORT}`));
});









