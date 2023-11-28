const { Router } = require("express");
const TagsControllers = require("../controllers/TagsControllers");
const tagRoutes = Router();

const tagsControllers = new TagsControllers();

tagRoutes.get("/:user_id", tagsControllers.Index);

module.exports = tagRoutes;
