// U: Errores de modelo usuario
// A: Errores de autenticacion

const errors = {
    'A001': {
        status: 400,
        message: 'Invalid token'
    },
    "A002": {
        status: 403,
        message: 'Access deneid.'
    },
    'U001': {
        status: 400,
        message: 'User already exist'
    },
    'U002': {
        status: 404,
        message: 'User not found'
    },
    'U003': {
        status: 400,
        message: 'Email or password incorrect'
    },
};

module.exports = errors;
