const { faker } = require('@faker-js/faker');

exports.insertNewPerson = (connection) => {
    return new Promise((resolve, reject) => {
        var name = faker.person.fullName();
        connection.query('INSERT INTO `pessoas` (nome) VALUES (?)', [name], (err, results) => {
            if (err) reject(err);
    
            resolve();
        });
    })
}

exports.getAllPerson = (connection) => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * from `pessoas`', function(err, rows, fields) {
            if (err) reject(err);
            resolve(rows);
        });
    })
}

exports.truncate = (connection) => {
    return new Promise((resolve, reject) => {
        connection.query('TRUNCATE `pessoas`', function(err, rows, fields) {
            if (err) reject(err);
            resolve();
        });
    });
}