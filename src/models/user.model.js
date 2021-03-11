const mongoose =  require('mongoose');
const {Schema} = mongoose;
const {compareSync, hashSync, genSaltSync} = require('bcryptjs');

const UserSchema = new Schema({
    name: {
        type: String,
        requeride:true,
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});
// me todos agregado al schema de mongo -----------
UserSchema.methods.toJSON = function(){
    let user = this.toObject();
    delete user.password;
    return user;
}

UserSchema.methods.comparePasswords = function(password){
    console.log('adentro del model');
    console.log(password);
    console.log(this.password);
    return compareSync(password, this.password);
}
// me todos agregado al schema de mongo -----------

//tiene que ser una funcion normal para que no se pierda en el scoot de mongoos
UserSchema.pre('save', async function(next){
    const user = this;
    if(!user.isModified('password')){
        return next();
    }

    const salt = genSaltSync(10);
    const hashedPassword = hashSync(user.password, salt);
    user.password = hashedPassword;
    next();
})





module.exports = mongoose.model('user', UserSchema);