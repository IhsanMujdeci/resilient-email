const ERROR_TYPES = {
    ENTITY_PARSE_FAILED: 'entity.parse.failed'
};

function errorHandler (error, req, res, next) {
    console.log(error);
    if (error.isJoi) {
        return res.status(400).send({message: error.details[0].context.label});
    }

    if(error.type === ERROR_TYPES.ENTITY_PARSE_FAILED){
        return res.status(400).send({message: 'Could not decode request: JSON parsing failed'});
    }

    return res.status(error.status || error.statusCode || 500).send({message: error.message});
}


module.exports = errorHandler;