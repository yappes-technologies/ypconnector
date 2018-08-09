const http = require('http');
const https = require('https');
const url = require('url');
const qs = require('qs');
let libMessages = require('./lib_error_messages');
let msgObj = new libMessages();

let responseSchema = {
	"headers": "",
	"statusCode": "",
	"statusMessage": "",
	"body": ""
}

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
			responseSchema.headers = response.headers;
			responseSchema.statusCode = response.statusCode;
			responseSchema.statusMessage = response.statusMessage;
			responseSchema.body = responseChunk;
			callback(null, responseSchema);
		});
	});
	requestObj.on('error', function (err) {
		msgObj.checkError(err);
		callback(err);
	});
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
			responseSchema.headers = response.headers;
			responseSchema.statusCode = response.statusCode;
			responseSchema.statusMessage = response.statusMessage;
			responseSchema.body = responseChunk;
			callback(null, responseSchema);
		});
	});
	if (Object.keys(parameters.payload).length > 0) {
		requestObj.write(JSON.stringify(parameters.payload));
	} else {
		callback(new Error("Payload required for PUT/POST/PATCH Methods"));
	}
	requestObj.on('error', function (err) {
		msgObj.checkError(err);
		callback(err);
	});
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
			responseSchema.headers = response.headers;
			responseSchema.statusCode = response.statusCode;
			responseSchema.statusMessage = response.statusMessage;
			responseSchema.body = responseChunk;
			callback(null, responseSchema);
		});
	});
	if (Object.keys(parameters.payload).length > 0) {
		requestObj.write(JSON.stringify(parameters.payload));
	} else {
		callback(new Error("Payload required for PUT/POST/PATCH Methods"));
	}
	requestObj.on('error', function (err) {
		msgObj.checkError(err);
		callback(err);
	});
	requestObj.end();
}
//DELETE
YappesLibrary.prototype.delete = function (apiUrl, parameters, callback) {
	let self = this;
	let reqSchemeObj = https;
	let responseChunk = "";
	let urlParts = url.parse(apiUrl);
	let options = {
		host: urlParts.hostname,
		path: urlParts.pathname,
		port: urlParts.port,
		method: 'delete',
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
			responseSchema.headers = response.headers;
			responseSchema.statusCode = response.statusCode;
			responseSchema.statusMessage = response.statusMessage;
			responseSchema.body = responseChunk;
			callback(null, responseSchema);
		});
	});
	requestObj.on('error', function (err) {
		msgObj.checkError(err);
		callback(err);
	});
	requestObj.end();
}
YappesLibrary.prototype.patch = function (apiUrl, parameters, callback) {
	let self = this;
	let reqSchemeObj = https;
	let responseChunk = "";
	let urlParts = url.parse(apiUrl);
	let options = {
		host: urlParts.hostname,
		path: urlParts.pathname,
		port: urlParts.port,
		method: 'PATCH',
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
			responseSchema.headers = response.headers;
			responseSchema.statusCode = response.statusCode;
			responseSchema.statusMessage = response.statusMessage;
			responseSchema.body = responseChunk;
			callback(null, responseSchema);
		});
	});
	if (Object.keys(parameters.payload).length > 0) {
		requestObj.write(JSON.stringify(parameters.payload));
	} else {
		callback(new Error("Payload required for PUT/POST/PATCH Methods"));
	}
	requestObj.on('error', function (err) {
		msgObj.checkError(err);
		callback(err);
	});
	requestObj.end();
}
module.exports = YappesLibrary