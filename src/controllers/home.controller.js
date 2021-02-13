let _homeService = null;
//awalix : esta clase no va a necistar nada ya que awalix va a inyectar lo que ellla necesite

class HomeController {
    constructor({ HomeService }){
        _homeService = HomeService
    }

    index(req, res){
        console.log('entre soy controler');
        return  res.send(_homeService.index());
    }
}

module.exports = HomeController;