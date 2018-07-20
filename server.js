const http = require('http');
const express = require('express');
const qs = require('qs');
let app = express();


//2 cases 
//in order to check the 200 place the values 
//for 204 remove the values from getResponseObj  
let getResponseObj = {
    'name': 'getUser',
    'id': '1025',
    'age': '22'
}
let addResponseObj = {
    'name': 'addUser',
    'id': '1026',
    'age': '10'
}
let updateResponseObj = {
    'name': 'updateUser',
    'id': '1025',
    'age': '22'
}

app.get('/getdata', function (req, res) {
    res.send(getResponseObj);
});

app.post('/postdata', function (req, res) {
    res.status(200).send(addResponseObj);
})

app.put('/putdata', function (req, res) {
    res.send(updateResponseObj);
});


app.listen(8081, () => console.log('Example app listening on port 8081'))