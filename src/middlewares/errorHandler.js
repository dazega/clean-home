const errorCodes = require('../errors/errorCodes');

const errorHandler = (err, req, res, next) => {
    if (err instanceof Error) {
        return next(err);
    }

    const { code } = err;
    const { status, message } = errorCodes[code];


    return res.status(status).json({code, message })
};

module.exports = errorHandler;
