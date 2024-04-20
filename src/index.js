const express = require('express')
const mysql   = require('mysql');
const { faker } = require('@faker-js/faker');

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

    var name = faker.person.fullName();
    connection.query('INSERT INTO `pessoas` (name) VALUES (?)', [name], (err, results) => {
      if (err) throw err;
    });

    connection.query('SELECT * from `pessoas`', function(err, rows, fields) {
        if (err) throw err;
        
        var html = "<html>";
        html += "<head>";
        html += "</head>";
        html += "<body>";
        html += "<h1>Full Cycle Rocks!</h1>";
        html += "<ul>";
        for (var i=0; i<rows.length; i++) {
            html += `<li>${rows[i].name}</li>`
        }
    
        html += "</ul>";
        html += "</body>";
        html += "</html>";
    
        res.send(html)
    });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})