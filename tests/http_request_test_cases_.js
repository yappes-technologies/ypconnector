const expect = require("chai").expect;
const assert = require('assert');
const ypconnector = require('../ypconnector');
let token = "";
let ypconnectObj = new ypconnector(token);

//GET REQUEST RESPONSE CHECKS 
describe("/GET Fetch all values", function () {
    it("it should Fetch all the details", function (done) {
        assert.doesNotThrow(function () {
            let getUrl = "http://localhost:8081/getdata";
            let getParams = {
                "headers": {
                    "Content-Type": "application/json"
                },
                "queryparams": {},
                payload: {}
            }
            ypconnectObj.get(getUrl, getParams, function (err, responseData) {
                if (responseData != undefined) {
                    assert.equal(JSON.parse(responseData.body).name, 'getUser');
                } else {
                    assert.equal(1, 2);
                }
                done();
            });
        });

    });

});
//POST REQUEST RESPONSE CHECKS 
describe("/POST add new values", function () {
    it("it should able to add new details", function (done) {
        assert.doesNotThrow(function () {
            let postUrl = "http://localhost:8081/postdata";
            let postParams = {
                "headers": {
                    "Content-Type": "application/json"
                },
                "queryparams": {},
                payload: {
                    'name': 'addUser',
                    'id': '1026',
                    'age': '10'
                }
            }
            try {
                ypconnectObj.post(postUrl, postParams, function (err, responseData) {
                    if (responseData != undefined) {
                        console.log(responseData.body);
                        assert.equal(JSON.parse(responseData.body).name, 'addUser');
                    } else {
                        console.log("error" + responseData);
                        assert.equal(1, 2);
                    }

                    done();
                });
            } catch (e) {
                console.log(e);
            }
        });
    });
});
//PUT REQUEST RESPONSE CHECKS
describe("/PUT UPDATE values", function () {
    it("it should UPDATE the specific details", function (done) {
        assert.doesNotThrow(function () {
            let updateUrl = "http://localhost:8081/putdata";
            let updateParams = {
                "headers": {
                    "Content-Type": "application/json"
                },
                "queryparams": {},
                payload: {
                    'name': 'updateUser',
                    'id': '1026',
                    'age': '10'
                }
            }
            ypconnectObj.put(updateUrl, updateParams, function (err, responseData) {
                try {
                    if (responseData != undefined) {
                        assert.equal(JSON.parse(responseData).name, 'updateUser');
                    } else {
                        assert.equal(1, 2);
                    }
                } catch (e) {
                    console.log(e);
                }
                done();
            });
        });

    });
});