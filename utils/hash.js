const bcrypt = require('bcrypt');

const encryption = async (key) => {
    // 10 rounds
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(key, salt);
    console.log(salt);

    return hashed;
};

module.exports = encryption;

