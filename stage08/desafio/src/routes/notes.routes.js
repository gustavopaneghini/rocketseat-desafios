const { Router } = require("express");
const NotesControllers = require("../controllers/NotesControllers");
const notesRoutes = Router();

const notesControllers = new NotesControllers();

notesRoutes.post("/:user_id", notesControllers.Create);
notesRoutes.get("/:id", notesControllers.Show);
notesRoutes.delete("/:id", notesControllers.Delete);
notesRoutes.get("/", notesControllers.Index);

module.exports = notesRoutes;
