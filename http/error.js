const Error = {
    HttpError: class HttpError extends Error{
      constructor(message, statusCode){
          super(message);
          this.name = "HttpError";
          this.statusCode = statusCode
      }
    },
    errorCodes: {
        BODY_NOT_JSON: 'Could not decode request: JSON parsing failed',
        NO_PAYLOAD: "Could not decode request: Payload not found on body",
        INCORRECT_PAYLOAD: "Could not decode request: Payload must be an array of objects"
    }
};

module.exports = Error;