const message = require('../models/message.model');
const axios = require('axios');

module.exports = {
    create: async function(data, callback){
        try {
            console.log(data)
            const response = await axios.post('http://127.0.0.1:8000/fetch', {"Text": data.text});
            let query = {};
            query.question = data.text;
            query.text = response.data.result;
            query.image = "";
            query.userId = data.userId;
            query.createdAt = new Date();
            query.updatedAt = new Date();
            await message.create(query).then((result) => {'use strict';
                console.log(result);
                if(result){
                    return callback(200, 'Successful Response', response.data)
                }else{
                    return callback(400, 'Failed Response', "")        
                }
            })
          } catch (error) {
            return callback(400, error, "")
          }
    },
    getAll: async function(data, callback){
        try{
            let query = {};
            console.log(data.id)
            query.userId = data.id;
            await message.findAll({
                where: {
                    userId: data.id
                }
            }).then((result) => {'use strict';
                if(result){
                    return callback(200, 'Successful get all message', result);
                }
                return callback(400, 'Failed get all messages', "")
            }).catch((error) => {
                return callback(401, 'Failed get all messages', "")
            })
        }catch(error){
            return callback(400, error, "")
        }
    },
    deleteOne: async function(data, callback){
        try{
            let query = {}
            query.id = data.id;
            await message.deleteOne({query}).then((result) => {
                'use strict';
                if(result){
                    return callback(200, 'Successful delete one message', result);
                }
                return callback(400, 'Failed delete one message', result);
            }).catch((error) => {
                return callback(401, 'Failed delete one message', result);
            })
        }catch(error){

        }
    }
}