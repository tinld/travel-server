const user = require('../models/user.model');
const bcrypt = require('bcrypt');
const userCreate = require('./hashPassword/hashPassword');
const verifyData = require('../utils/verifyData.utils');

module.exports = {
    create: async function(data, callback){
        if(!verifyData.validType(data.password, 'string')){
            return callback(400, 'Invalid password', "")
        }
        if(!verifyData.validType(data.email, 'string')){
            return callback(400, 'Invalid email', "");
        }
        if(!verifyData.validType(data.fullname, 'string')){
            return callback(400, 'Invalid fullname', "")
        }

        const hPassword = await userCreate.hashPassword(data.password);

        let query = {};
        query.fullname = data.fullname;
        query.email = data.email;
        query.password = hPassword;
        let where = {email: query.email}
        await user.findOne({where: where}).then(async (result) => {
            if(result){
                return callback(402, 'Email account was created before', "")
            }
            await user.create(query).then((result) => {
                if(result){
                    return callback(200, 'Create account successfully', result)
                }
            }).catch((error) => {
                return callback(401, 'Create account failed', error)
            })
        })
    },
    signIn: async function(data, callback){
        if(!verifyData.validType(data.password, 'string')){
            return callback(400, 'Invalid password', "")
        }

        if(!verifyData.validType(data.email, 'string')){
            return callback(400, 'Invalid email', "");
        }

        let where = {email: data.email}
        await user.findOne({where: where}).then(async (result) => {
            if(result){
                const isPasswordMatch = userCreate.confirmPassword(result.password, data.password);
                if(isPasswordMatch){
                    return callback(200, 'Login successful', result);
                }else{
                    return callback(200, 'Login failed', "");
                }
            }else{
                return callback(400, "Not find user", "");
            }
        })
    },
    update: async function(data, callback){
        where = {}
        id = data.id;
        console.log(data.id);
        where.fullname = data.fullname;
        where.email = data.email;

        await user.update(where, {
            where: {
                id: data.id
            }
        })
        .then((result) => {
            if(result[0]){
                return callback(200, 'Update fullname successful', result);
            }else{
                return callback(500, 'Update fullname failed', result);
            }
        })
        .catch((error) => {
            return callback(500, "Update fullname failed", error);
        })
    }
}