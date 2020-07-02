const jwt = require('jsonwebtoken')
const User = require('../models/user')

const auth = async (req, res, next) => {
    try {
        //Check the token provided in the Header http request
        const token = req.header('Authorization').replace('Bearer ', '')
       
        //Verify the token with the database
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
       
        //Check if the token matchs with the user logged in
        const user = await User.findOne({_id: decoded._id, 'tokens.token': token})
       
        //If the token doesn't with any user, returns a error
       
        if (!user) {
            throw new Error()
        }
       
        //inputs the user to the router
        req.user = user

        //inputs the token to the router
        req.token = token
        next()
    } catch (e) {
        res.status(401).send({ error: 'Please authenticate.'})
    }    
}

module.exports = auth