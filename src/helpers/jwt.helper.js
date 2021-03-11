const {sign} = require('jsonwebtoken');
const { JWT_SECRET }= require('../config');

module.exports.generateToken = function(user){
    return sign( {user}, JWT_SECRET, {expiresIn:'4h'}); 
    //1_usuario en forma de objeto
    //2_palabra secreta
    //3_tiempo de expiracion 4h
}