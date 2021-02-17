let _ideaService = null

class IdeaController {
    constructor({IdeaService}) {
        _ideaService = IdeaService;
    }

    async get(req, res){
        const { ideaId } = req.params; // myapi.com/idea/345454545 params:345454545
        const idea = await _ideaService.get(ideaId);
        return res.send(idea);  
    }

    async getAll(req,res){
        const idea = await _ideaService.getAll();
        return res.send(idea);
    }

    async create(req, res){
        const {body} = req
        const creatdIdea = await _ideaService.create(body);
        return res.status(201).send(creatdIdea)
    }   

    async update(req, res){
        const { body } = req;
        const { ideaId } = req.params;
        const updatedIdea = await _ideaService.update(ideaId, body);
        return res.send(updatedIdea);
    }

    async delete(req,res){
        const { ideaId } = req.params;
        const deletedIdea = await _userService.delete(ideaId);
        return res.send(deletedIdea);

    }

    async getUserIdeas(req,res){
        const { userIde } = req.params
        const ideas = await _ideaService.getUserIdeas(userId)
        return res.send(ideas);
    }
    async upvoteIdea(req,res){
        const {ideaId} = req.params;
        const idea = await _ideaService.updvoteIdea(ideaId)
        return res.send(idea);
    } 

    async downvoteIdea(req,res){
        const {ideaId} = req.params;
        const idea = await _ideaService.downvoteIdea(ideaId)
        return res.send(idea);
    } 

}   

module.exports = IdeaController;