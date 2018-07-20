const expect = require("chai").expect;
const assert = require('assert');
const ypconnector = require('../ypconnector');
let token = "";
let ypconnectObj = new ypconnector(token);

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
                    assert.equal(responseData.statusCode, '200');
                } else {
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
                    assert.equal(responseData.statusCode, '204');
                } else {
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
                    assert.equal(1, 2);
                }
                done();
            });
        });
    });
});