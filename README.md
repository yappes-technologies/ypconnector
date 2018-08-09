# ypconnector
Ypconnector is a Nodejs SDK used for integrating the Yappes Published APIs with your application. SDK is installed via npm. 

Ypconnector provides individual action methods and a common method for making API requests.Currently it supports GET,POST,POST,DELETE and PATCH.


Install:
```
npm install ypconnector
```
Usage:
```
const ypconnector = require('ypconnector');

//Yappes-Token obtained from yappes portal
let yappesToken = "YOUR X-YAPPES-KEY";
let ypconnectorObj = new ypconnector(yappesToken);

//Data needed to call the library methods - individual Actions(GET/POST/PUT)
let url = "http://localhost:8081/getdata";
let data = {
 "headers": {
  "Content-Type":"application/json"
 },
 "queryparams": {
  "queryParam1" : "value1"
 },
 "payload": {
  "key":"value"
 }
}

//GET Request with empty payload: {}
ypconnectObj.get(url, data, function (err, responseData) {
 if(err)
  throw err;
 else
  console.log(responseData);
});

//POST Request
ypconnectObj.post(url, data, function (err, responseData) {
 if(err)
  throw err;
 else
  console.log(responseData);
});

//PUT Request
ypconnectObj.put(url, data, function (err, responseData) {
 if(err)
  throw err;
 else
  console.log(responseData);
});

//Common Method
//Data needed to call the library methods - common action (call)
let url = "http://localhost:8081/getdata";
let data = {
 "method":"get"
 "headers": {
  "Content-Type":"application/json"
 },
 "queryparams": {
  "queryParam1" : "value1"
 },
 "payload": {
  "key":"value"
 }
}

ypconnectObj.call(url, data, function (err, responseData) {
 if(err)
  throw err;
 else
  console.log(responseData);
});
'''
