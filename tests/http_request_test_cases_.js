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
                    assert.equal(JSON.parse(responseData).name, 'getUser');
                } else {
                    console.log(err);
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
                    console.log(responseData);
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
//SUCCESS RESPONSES
describe.only('Successful Response ', function () {
    it("200 OK", function (done) {
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
                    console.log(responseData.statusCode);
                    assert.equal(responseData.statusCode, '200');
                } else {
                    console.log(err);
                    assert.equal(1, 2);
                }
                done();
            });
        });
    });
    it("204 No Content ", function (done) {
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
                    console.log(responseData.statusCode);
                    assert.equal(responseData.statusCode, '204');
                } else {
                    console.log(err);
                    assert.equal(1, 2);
                }
                done();
            });
        });
    });
});
//CLIENT ERRORS
describe.only('Client Error Condition', function () {
    it("400  Bad Request", function (done) {
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
                    assert.equal(responseData.statusCode, '400');
                } else {
                    console.log(err);
                    assert.equal(1, 2);
                }
                done();
            });
        });
    });
    it("401 Unauthorized Access ", function (done) {
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
                    assert.equal(responseData.statusCode, '401');
                } else {
                    console.log(err);
                    assert.equal(1, 2);
                }
                done();
            });
        });
    });
    it("406 Not Acceptable", function (done) {
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
                    assert.equal(responseData.statusCode, '406');
                } else {
                    console.log(err);
                    assert.equal(1, 2);
                }
                done();
            });
        });
    });
    it("404  Not Found", function (done) {
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
                    assert.equal(responseData.statusCode, '404');
                } else {
                    console.log(err);
                    assert.equal(1, 2);
                }
                done();
            });
        });
    });
    it("403  Forbidden", function (done) {
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
                    assert.equal(responseData.statusCode, '403');
                } else {
                    console.log(err);
                    assert.equal(1, 2);
                }
                done();
            });
        });
    });
    it("405 Method Not Allowed ", function (done) {
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
                    assert.equal(responseData.statusCode, '405');
                } else {
                    console.log(err);
                    assert.equal(1, 2);
                }
                done();
            });
        });
    });
    it("415 Unsupported Media Type", function (done) {
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
                    assert.equal(responseData.statusCode, '415');
                } else {
                    console.log(err);
                    assert.equal(1, 2);
                }
                done();
            });
        });
    });
    it("408  Request Timeout", function (done) {
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
                    assert.equal(responseData.statusCode, '408');
                } else {
                    console.log(err);
                    assert.equal(1, 2);
                }
                done();
            });
        });
    });
});
//SERVER ERRORS
describe.only('Server Error Condition', function () {
    it("500 Internal Server Error", function (done) {
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
                    assert.equal(responseData.statusCode, '500');
                } else {
                    console.log(err);
                    assert.equal(1, 2);
                }
                done();
            });
        });
    });
    it("502 Bad Gateway", function (done) {
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
                    assert.equal(responseData.statusCode, '502');
                } else {
                    console.log(err);
                    assert.equal(1, 2);
                }
                done();
            });
        });
    });
    it("503 Service Unavailable", function (done) {
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
                    assert.equal(responseData.statusCode, '503');
                } else {
                    console.log(err);
                    assert.equal(1, 2);
                }
                done();
            });
        });
    });
    it("504 Gateway Timeout", function (done) {
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
                    assert.equal(responseData.statusCode, '504');
                } else {
                    console.log(err);
                    assert.equal(1, 2);
                }
                done();
            });
        });
    });
});