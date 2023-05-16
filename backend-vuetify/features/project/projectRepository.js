const Project = require("../models/projectModel.js")
const repObj={
    //New Project Repo
    async newProject(req){
        return await Project.create(req.body) 
    },
    async getProject(req){
        const project= await Project.findAll()
        return project
    }
}
module.exports=repObj;