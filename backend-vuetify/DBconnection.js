const {Sequelize} = require("sequelize")

const sequelize = new Sequelize('todoapp','postgres','Plmnkobji@969',{
    host:"localhost",
    dialect:"postgres"
})

try{
    sequelize.authenticate();
    console.log("Connection established")
}catch(error){
    console.error("Unable To Connect:",error)
}
module.exports = sequelize;