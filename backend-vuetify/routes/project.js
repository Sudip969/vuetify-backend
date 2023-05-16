const express= require("express")
const router = express.Router();
const controller = require("../features/project/projectController.js")

router.post("/newProject", controller.newProject);
router.get("/getProjects", controller.getProject)


module.exports = router;