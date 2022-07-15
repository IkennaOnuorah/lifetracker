const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config");

const generateToken = (data) => jwt.sign(data, SECRET_KEY, { expiresIn: "24h" })

const createUserJwt = (user) => {
    const payload = {
        email: user.email,
        isAdmin: user.isAdmin || false
    }

    return generateToken(payload)
}

const validateToken = (token) => {
    try {
        const decoded = jwt.verify(token, SECRET_KEY)
        return decoded
    }
    catch(error) {
        return {}
    }
}

// const testToken = () => {
//     const user = { email: "person@gmail.com"};
//     const token = generateToken(user);
//     const validatedToken = validateToken(token);
//     console.log("validatedToken", validatedToken)
// }

// testToken();

module.exports = {
    validateToken, createUserJwt
}