const userManager = require('../managers/user.manager.js');


module.exports = {
    create: function(req, res){
        const data = req.body || '';
        userManager.create(data, function(code, status, result){
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
    signIn: function(req, res){
        const data = req.body || '';
        userManager.signIn(data, function(code, status, result){
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
    update: function(req, res){
        const data = req.body || '';
        userManager.update(data, function(code, status, result){
            if(code === 500){
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