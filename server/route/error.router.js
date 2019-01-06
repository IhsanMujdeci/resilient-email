const ERROR_TYPES = {
    ENTITY_PARSE_FAILED: 'entity.parse.failed'
};

function reaplceErrorValue(errorString, replaceWith) {
    const regex = /\${value}/;
    return errorString.replace(regex, replaceWith)
}

function errorHandler (error, req, res, next) {

    try{
        if (error.isJoi) {
            return res.status(400).send({message: reaplceErrorValue(error.details[0].context.label, error.details[0].context.value)});
        }

        if(error.type === ERROR_TYPES.ENTITY_PARSE_FAILED){
            return res.status(400).send({message: 'Could not decode request: JSON parsing failed'});
        }

        return res.status(error.status || error.statusCode || 500).send({message: error.message});
    }
    catch(err){
        console.log(err)
    }

}


module.exports = errorHandler;