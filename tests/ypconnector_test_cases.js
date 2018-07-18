const yappesConnector = require('../helpers/ypconnector');

let token = "132f292b2dc2e3c60b1171ea46a7fc228fbcaf33b44d43fb7e8bc1f2dede4738";
let yappesConnectorObj = new yappesConnector(token);

let url = "http://12344.apizone001.dev.yappes.local:98/movieRating";
let putUrl = "http://12344.apizone001.dev.yappes.local:98/movieRating/5b4d9832bc841d19b8af08d5";

let getParams = {
	"headers": {
		"Content-Type": "application/json"
	},
	"queryparams": {
		"location": "-33.86,151.20",
		"timestamp": "1331161200",
		"key": "AIzaSyAwO0vVsKgWkGwO6kpyvLBxo-wBmek7bek"
	},
	payload: {}
}
let postParams = {
	"headers": {
		"Content-Type": "application/json"
	},
	"queryparams": {
		"location": "-33.86,151.20",
		"timestamp": "1331161200",
		"key": "AIzaSyAwO0vVsKgWkGwO6kpyvLBxo-wBmek7bek"
	},
	payload: {
		"Movies": "whiplash",
		"Ratings": "8.5"
	}
}
let putParams = {
	"headers": {
		"Content-Type": "application/json"
	},
	"queryparams": {
		"location": "-33.86,151.20",
		"timestamp": "1331161200",
		"key": "AIzaSyAwO0vVsKgWkGwO6kpyvLBxo-wBmek7bek"
	},
	payload: {
		"Movies": "Fury",
		"Ratings": "9.5"
	}
}

yappesConnectorObj.call(url, getParams, function (err, responseData) {
	if (err) {
		//console.log(err);
	} else {
		console.log(responseData);
	}
});
//GET
yappesConnectorObj.get(url, getParams, function (err, responseData) {
	if (err) {
		//console.log(err);
	} else {
		console.log(responseData);
	}
});
//POST
yappesConnectorObj.post(url, postParams, function (err, responseData) {
	if (err) {
		console.log(err);
	} else {
		console.log(responseData);
	}
});
//PUT
yappesConnectorObj.put(putUrl, putParams, function (err, responseData) {
	if (err) {
		console.log(err);
	} else {
		console.log(responseData);
	}
});