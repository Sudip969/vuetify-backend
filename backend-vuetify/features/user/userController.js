const service = require("./userService");
const bcrypt = require("bcryptjs");
const contObj = {

  //insert controller
  async insert(req, res) {
    req.body.password=await bcrypt.hash(req.body.password,8)
    res.send(await service.insert(req));
  }, 
    //login controller
    async login(req, res) {
        res.send(await service.login(req));
      },
       
}
module.exports=contObj