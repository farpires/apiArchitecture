/*router principal( encargado de inyectar los middlewers ,que queramos el
                    encargad de hacer la configuracion de todas las rutas)
estos M son los middelwer que se ejecute de principio

                    */
const express =  require('express');
const cors = require('cors'); //M
const helmet = require('helmet');//M
const compression = require('compression');//M
require("express-async-errors");
const {ErrorMiddleware, NotFoundMiddleware} = require('../middlewares');
const swaggerUI = require('swagger-ui-express');
const {SWAGGER_PATH} = require('../config');
const swaggerDocument = require(SWAGGER_PATH);
module.exports = function({
    HomeRoutes, 
    UserRoutes, 
    IdeaRoutes, 
    CommentRoutes,
    AuthRoutes,
}){
    const router = express.Router();
    const apiRoutes = express.Router();

    apiRoutes
    .use(express.json())
    .use(cors())
    .use(helmet())
    .use(compression());

    apiRoutes.use("/home", HomeRoutes);
    apiRoutes.use("/user", UserRoutes);
    apiRoutes.use("/idea", IdeaRoutes);
    apiRoutes.use("/comment", CommentRoutes);
    apiRoutes.use("/auth",AuthRoutes);
    

    router.use("/v1/api", apiRoutes); //todos los empoint va a tener esto /v1/api
    router.use("/api-docs",swaggerUI.serve,swaggerUI.setup(swaggerDocument));

    router.use(NotFoundMiddleware);
    router.use(ErrorMiddleware);

    return router;


}