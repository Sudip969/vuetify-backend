const sequelize =require("../../DBconnection.js");
const {DataTypes ,Model} = require("sequelize")

class Project extends Model {}

Project.init(
    {
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false,
        },
        title:{
            type:DataTypes.STRING,
            allowNull:false
        },
        info:{
            type:DataTypes.STRING,
            allowNull:false
        },
        person:{
            type:DataTypes.STRING,
            allowNull:false
        },
        due:{
            type:DataTypes.DATEONLY,
            allowNull:false
        },
        status:{
            type:DataTypes.STRING,
            allowNull:true
        }
    },
    {
        sequelize,
        modelName:"Project",
        tableName:"Projects"
    }
);
module.exports = Project;