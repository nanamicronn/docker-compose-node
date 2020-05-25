'use strict';

const express = require('express');

// Constants
const PORT = 8081;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});
app.get('/hoge', (req, res) => {
  res.send('Hello World Hoge');
});

app.get('/aaa', (req, res) => {
  res.send('Hello World aaa');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
