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

        loggedDev.dislikes.push(targetDev._id);
        await loggedDev.save();


        return resp.json({loggedDev}); 
    }
}