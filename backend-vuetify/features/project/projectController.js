const service= require("./projectService")
const contObj={
    //New Project controller
    async newProject(req,res){
        res.send(await service.newProject(req))
    },
    async getProject(req,res){
        res.send(await service.getProject(req))
    }
}
module.exports =contObj