const mcache = require("memory-cache");
const {CACHE_KEY} = require('../config');

module.exports = function(duration){
    return (req,res, next)=>{
        const key = CACHE_KEY + req.originUrl || req.url;
        const cachedbody = mcache.get(key);
        if (cachedbody) {
            return res.send(JSON.parse(cachedbody))
        } else{
            res.sendResponse = res.send;
            res.send = body =>{
                mcache.put(key, body, duration * 100 );
                res.sendResponse(body);
            };
            next();
        }
    }
}