const express = require('express')
const mysql   = require('mysql');
const { insertNewPerson, getAllPerson, truncate } = require('./utils');

const app = express()
const port = 3000

var connection = mysql.createConnection({
  host: 'mysql',
  user: 'user',
  password : 'password',
  database: "myapp", 
});
connection.connect();


app.get('/', async (req, res) => {
  await insertNewPerson(connection);
  var rows = await getAllPerson(connection);

  var html = "<html>";
  html += "<head>";
  html += "</head>";
  html += "<body>";
  html += "<h1>Full Cycle Rocks!</h1>";
  html += "<ul>";
  for (var i=0; i<rows.length; i++) {
      html += `<li>${rows[i].nome}</li>`
  }

  html += "</ul>";
  html += "</body>";
  html += "</html>";

  res.send(html)
})

app.get('/admin/truncate', async (req, res) => {
  await truncate(connection);
  res.send("Truncate done.")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})