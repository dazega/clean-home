// U: Errores de modelo usuario

const errors = {
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
    }
};

module.exports = errors;
