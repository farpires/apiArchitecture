const {sign} = require('jsonwebtoken');
const { JWT_SECRET }= require('../config');


/*se crea una funcion llamada generattoken
se crea un token con todo los datos de usuario*/
module.exports.generateToken = function(user){
    return sign( {user}, JWT_SECRET, {expiresIn:'4h'});
}   