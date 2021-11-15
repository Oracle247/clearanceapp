const express = require('express')
const mongoose = require('mongoose')

const bodyParser = require("body-parser");

const port = process.env.PORT || 6000;
//express app
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('client'))

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
})

app.get('/', (req, res) => {
  res.json({
    message:"hello"
  })
    // res.sendFile('./client/clear-ticket.html', { root: __dirname })
})

// app.get('/clear-ticket', (req, res) => {
//   res.sendFile('./client/clear-ticket.html', { root: __dirname })
// })

// app.get('/bulk-ticket', (req, res) => {
//     res.sendFile('./client/bulk-ticket.html', { root: __dirname })
// })

// app.get('/ticket-history', (req, res) => {
//     res.sendFile('./client/ticket-history.html', { root: __dirname })
// })

