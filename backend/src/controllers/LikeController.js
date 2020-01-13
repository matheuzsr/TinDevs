const Dev= require('../models/Dev');

module.exports={
    async store(req,resp){
        const { user }= req.headers;        
        const { devIdRecebedor }= req.params;
        //dev que ta dando like 
        const loggedDev= await Dev.findById(user);
        //dev que recebendo like 
        const targetDev= await Dev.findById(devIdRecebedor);
        
        if(!targetDev){
            return resp.status(400).json({error: 'Dev not exists'});
        }

        if(targetDev.likes.includes(user)){
            console.log('DEU MATCH');
        }

        loggedDev.likes.push(targetDev._id);
        await loggedDev.save();


        return resp.json({loggedDev}); 
    }
}