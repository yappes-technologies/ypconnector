const http = require('http');
const https = require('https');
const url = require('url');
const qs = require('qs');
let libMessages = require('../helpers/lib_error_messages');
let msgObj = new libMessages();

function YappesLibrary(token) {
	this.xyappeskey = token;
}
//common 
YappesLibrary.prototype.call = function (apiUrl, parameters, callback) {
	let self = this;
	let reqSchemeObj = https;
	let responseChunk = "";
	let urlParts = url.parse(apiUrl);
	let options = {
		host: urlParts.hostname,
		path: urlParts.pathname,
		port: urlParts.port,
		method: parameters.method,
		headers: parameters.headers
	};
	options.headers["X-YAPPES-KEY"] = self.xyappeskey;

	if (!options.port) {
		options.port = 443;
	}

	if (Object.keys(parameters.queryparams).length > 0) {
		options.path += "?" + qs.stringify(parameters.queryparams, {
			encode: false
		});
	}

	if (!urlParts.protocol.match(/https+/)) {
		reqSchemeObj = http;
	} else {
		reqSchemeObj = https;
	}

	let requestObj = reqSchemeObj.request(options, function (response) {
		response.on('data', function (chunk) {
			responseChunk += chunk;
		});
		response.on('end', function () {
			callback(null, responseChunk);
		});
	});
	requestObj.on('error', function (err) {
		msgObj.checkError(err);
		callback(err);
	});
	if (options.path != "get") {
		if (Object.keys(parameters.payload).length > 0) {
			requestObj.write(JSON.stringify(parameters.payload));
		} else {
			callback(new Error("Payload required for PUT/POST Methods"));
		}
	}
	requestObj.end();
}
//GET
YappesLibrary.prototype.get = function (apiUrl, parameters, callback) {
	let self = this;
	let reqSchemeObj = https;
	let responseChunk = "";
	let urlParts = url.parse(apiUrl);
	let options = {
		host: urlParts.hostname,
		path: urlParts.pathname,
		port: urlParts.port,
		method: 'get',
		headers: parameters.headers
	};
	options.headers["X-YAPPES-KEY"] = self.xyappeskey;

	if (!options.port) {
		options.port = 443;
	}

	if (Object.keys(parameters.queryparams).length > 0) {
		options.path += "?" + qs.stringify(parameters.queryparams, {
			encode: false
		});
	}

	if (!urlParts.protocol.match(/https+/)) {
		reqSchemeObj = http;
	} else {
		reqSchemeObj = https;
	}

	let requestObj = reqSchemeObj.request(options, function (response) {
		response.on('data', function (chunk) {
			responseChunk += chunk;
		});
		response.on('end', function () {
			callback(null, responseChunk);
		});
	});
	requestObj.on('error', function (err) {
		msgObj.checkError(err);
		callback(err);
	});
	if (options.path != "get") {
		if (Object.keys(parameters.payload).length > 0) {
			requestObj.write(JSON.stringify(parameters.payload));
		} else {
			callback(new Error("Payload required for PUT/POST Methods"));
		}
	}
	requestObj.end();
}
//POST
YappesLibrary.prototype.post = function (apiUrl, parameters, callback) {
	let self = this;
	let reqSchemeObj = https;
	let responseChunk = "";
	let urlParts = url.parse(apiUrl);
	let options = {
		host: urlParts.hostname,
		path: urlParts.pathname,
		port: urlParts.port,
		method: 'POST',
		headers: parameters.headers
	};
	options.headers["X-YAPPES-KEY"] = self.xyappeskey;

	if (!options.port) {
		options.port = 443;
	}

	if (Object.keys(parameters.queryparams).length > 0) {
		options.path += "?" + qs.stringify(parameters.queryparams, {
			encode: false
		});
	}

	if (!urlParts.protocol.match(/https+/)) {
		reqSchemeObj = http;
	} else {
		reqSchemeObj = https;
	}

	let requestObj = reqSchemeObj.request(options, function (response) {
		response.on('data', function (chunk) {
			responseChunk += chunk;
		});
		response.on('end', function () {
			callback(null, responseChunk);
		});
	});
	requestObj.on('error', function (err) {
		msgObj.checkError(err);
		callback(err);
	});
	if (options.path != "get") {
		if (Object.keys(parameters.payload).length > 0) {
			requestObj.write(JSON.stringify(parameters.payload));
		} else {
			callback(new Error("Payload required for PUT/POST Methods"));
		}
	}
	requestObj.end();
}
//UPDATE
YappesLibrary.prototype.put = function (apiUrl, parameters, callback) {
	let self = this;
	let reqSchemeObj = https;
	let responseChunk = "";
	let urlParts = url.parse(apiUrl);
	let options = {
		host: urlParts.hostname,
		path: urlParts.pathname,
		port: urlParts.port,
		method: 'put',
		headers: parameters.headers
	};
	options.headers["X-YAPPES-KEY"] = self.xyappeskey;

	if (!options.port) {
		options.port = 443;
	}

	if (Object.keys(parameters.queryparams).length > 0) {
		options.path += "?" + qs.stringify(parameters.queryparams, {
			encode: false
		});
	}

	if (!urlParts.protocol.match(/https+/)) {
		reqSchemeObj = http;
	} else {
		reqSchemeObj = https;
	}

	let requestObj = reqSchemeObj.request(options, function (response) {
		response.on('data', function (chunk) {
			responseChunk += chunk;
		});
		response.on('end', function () {
			callback(null, responseChunk);
		});
	});
	requestObj.on('error', function (err) {
		msgObj.checkError(err);
		callback(err);
	});
	if (options.path != "get") {
		if (Object.keys(parameters.payload).length > 0) {
			requestObj.write(JSON.stringify(parameters.payload));
		} else {
			callback(new Error("Payload required for PUT/POST Methods"));
		}
	}
	requestObj.end();
}

module.exports = YappesLibrary