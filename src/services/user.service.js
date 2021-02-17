const BaseServicie = require('./base.service');
let _userRepository= null;

class UserService extends BaseServicie {
 constructor({UserRepository}) {
     super(UserRepository);
     _userRepository = UserRepository
 }

 async  getUserByUsername(username){
     return await _userRepository.getUserByUsername(username)
 }
}

module.exports = UserService;