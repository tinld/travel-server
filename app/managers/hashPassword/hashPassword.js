const bcrypt = require('bcrypt');


module.exports = {
    hashPassword: async function(password){
        try{
            const saltRounds = 10;
            const salt = await bcrypt.genSalt(saltRounds);
            const hashPassword = await bcrypt.hash(password, salt);
            
            return hashPassword;
    
        }catch(error){
            return undefined
        }    
    },
    confirmPassword: async function(password, confirmPassword){
        try{
            const hashPassword = await this.hashPassword(confirmPassword);
            const isPasswordMatch = await bcrypt.compare(password, hashPassword)
            return isPasswordMatch;
        }catch(error){
            return false;
        }
    }
}