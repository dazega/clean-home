const { Profile } = require('../../models');
const createProfile = async (name, aboutYou = '', avg = 5, userId ) => {
    const profile = {
        name,
        aboutYou,
        avg,
        userId
    };

    return Profile.create(profile);
};

module.exports = createProfile;
