const {createContainer, asClass, asValue, asFunction} = require('awilix');

//config
const config = require("../config");
const app = require('.');

//service
const {HomeService, UserService, IdeaService, CommentService} = require('../services');

//controller
const {HomeController, UserController, IdeaController, CommentController} = require('../controllers');

//routes
const {HomeRoutes, UserRoutes, IdeaRoutes,CommentRoutes} = require('../routes/index.routes');
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
    HomeService: asClass(HomeService).singleton(),
    UserService: asClass(UserService).singleton(),
    IdeaService: asClass(IdeaService).singleton(),
    CommentService: asClass(CommentService).singleton(),
}).register({ // config todo los controllers
    HomeController: asClass(HomeController.bind(HomeController)).singleton(),
    UserController: asClass(UserController.bind(UserController)).singleton(),
    IdeaController: asClass(IdeaController.bind(IdeaController)).singleton(),
    CommentController: asClass(CommentController.bind(CommentController)).singleton(),

}).register({ // config todas las rutas
    HomeRoutes: asFunction(HomeRoutes).singleton(),
    UserRoutes: asFunction(UserRoutes).singleton(),
    IdeaRoutes: asFunction(IdeaRoutes).singleton(),
    CommentRoutes: asFunction(CommentRoutes).singleton()
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