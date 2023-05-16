const repo = require ("./projectRepository")
const serObj={
    //New Project Service
    async newProject(req){
        return await repo.newProject(req)
    },
    async getProject(req){
        return await repo.getProject(req)
    }
}

module.exports = serObj;