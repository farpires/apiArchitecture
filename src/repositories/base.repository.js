class BaseRepository {
    constructor(model) {
        this.model = model;
    }

    async get(id){
        return await this.model.findById(id);
    }
//  5 elemento de la primera pagina 
    async getAll(pageSize = 5, pageNum = 1){
        //me todo de paginacion skip - limit
        //skip cuanto elemento debe saltar para buscar
        //limit limita la cantidad de lemento que debe retorn ar  
        const skips = pageSize * (pageNum-1);  // cantidad de pagina que se debe saltar 
        return await this.model
        .find()
        .skip(skips)
        .limit(pageSize);
    }

    async create(entity){
        return await this.model.create(entity);
    }

    async update(id,entity){
        return await this.model.findByIdAndUpdate(id,entity,{new:true});
    }

    async delete(id){
        return await this.model.findByIdAndDelete(id);
    }
}

module.exports = BaseRepository;