const {createContainer, asClass, asValue, asFunction} = require('awilix');

//config
const config = require("../config");
const app = require('.');

//service
const {HomeService} = require('../services');

//controller
const {HomeController} = require('../controllers');

//routes
const {HomeRoutes} = require('../routes/index.routes');
const Routes = require('../routes');

//models
const {User, Comment, Idea} = require('../models');

//repositories
const { UserRepository, IdeaRepository, CommentRepository } = require('../repositories');


const container = createContainer();

container
.register({ // config principal de la aplicacion
    app : asClass(app).singleton(),
    router : asFunction(Routes).singleton(),
    config : asValue(config)
})
.register({ // config todo los servicio
    HomeService: asClass(HomeService).singleton()
}).register({ // config todo los controllers
    HomeController: asClass(HomeController.bind(HomeController)).singleton()
}).register({ // config todas las rutas
    HomeRoutes: asFunction(HomeRoutes).singleton()
}).register({ // config todos los modelos 
    User: asValue(User),
    Idea: asValue(Idea),
    Comment: asValue(Comment),  
}).register({ // config todos los repository
    UserRepository: asClass(UserRepository).singleton(),
    IdeaRepository: asClass(IdeaRepository).singleton(),
    CommentRepository: asClass(CommentRepository).singleton(),
});

module.exports = container;