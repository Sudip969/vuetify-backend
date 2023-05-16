const repo = require("./userRepository");
const serObj = {
  //Service to Insert
  async insert(req) {
    return await repo.insert(req);
  },
  //Service to Login
  async login(req) {
    return await repo.login(req);
  },
}   
module.exports=serObj