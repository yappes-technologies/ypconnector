function CustomErrorMessages() {
    // info - Status Range Info
    // OK - Status Range Ok
    // OK - Status Code 200
    const messages = {
        "200": {
            "code": "200",
            "status": "200",
            "statusType": " OK "
        },
        // No Content - Status Code 204
        "204": {
            "code": "204",
            "status": "204",
            "statusType": " No Content "
        },
        // clientError - Status Range Client Error
        // badRequest - Status Code 400
        "400": {
            "code": "400",
            "status": "400",
            "statusType": " Bad Request "
        },
        // unauthorized - Status Code 401
        "401": {
            "code": "401",
            "status": "401",
            "statusType": " Unauthorized Access"
        },
        // notAcceptable - Status Code 406
        "406": {
            "code": "406",
            "status": "406",
            "statusType": " Not Acceptable"
        },
        // notFound - Status Code 404
        "404": {
            "code": "404",
            "status": "404",
            "statusType": " Not Found "
        },
        // forbidden - Status Code 403
        "403": {
            "code": "403",
            "status": "403",
            "statusType": " Forbidden "
        },
        // Method Not Allowed - Status Code 405
        "405": {
            "code": "405",
            "status": "405",
            "statusType": " Method Not Allowed "
        },
        // Request Timeout - Status Code 408
        "408": {
            "code": "408",
            "status": "408",
            "statusType": " Request Timeout "
        },
        // Unsupported Media Type - Status Code 415
        "415": {
            "code": "415",
            "status": "415",
            "statusType": " Unsupported Media Type "
        },

        // serverError - Status Range Server Error
        // Internal Server Error - Status Code 500
        "500": {
            "code": "500",
            "status": "500",
            "statusType": " Internam Server Error "
        },
        // Bad Gateway - Status Code 502
        "502": {
            "code": "502",
            "status": "502",
            "statusType": " Bad Gateway "
        },
        // Service Unavailable - Status Code 503
        "503": {
            "code": "503",
            "status": "503",
            "statusType": " Service Unavailable "
        },
        // Gateway Timeout - Status Code 504
        "504": {
            "code": "504",
            "status": "504",
            "statusType": " Gateway Timeout "
        }
    }
}
checkError = function(error) {
    if (error) {
        return self.CustomErrorMessages.messages[error.code];
    }
}