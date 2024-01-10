const messageManager = require('../managers/message.manager');


module.exports = {
    create: function(req, res){
        const data = req.body || '' ;
        
        messageManager.create(data, function(code, status, result){
            if(code === 404){
                return res.json({
                    code: code,
                    status: status,
                    result: ""
                })
            }
            return res.json({
                code: code,
                status: status,
                result: result
            })
        })
    },
    getAll: function(req, res){
        const data = req.query || '';
        messageManager.getAll(data, function(code, status, result){
            if(code === 404){
                return res.json({
                    code: code,
                    status: status,
                    result: ""
                })
            }
            return res.json({
                code: code,
                status: status,
                result: result
            })
        })
    }
}