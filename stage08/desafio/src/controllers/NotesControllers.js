const knex = require("../database/knex");
const AppError = require("../utils/AppError");

class NotesControllers {
  async Create(request, response) {
    const { title, description, rating, tag } = request.body;
    const { user_id } = request.params;

    if (rating <= "0" || rating > "5") {
      throw new AppError("Avalie de 0 à 5 o quanto gostou desse filme.");
    }

    const [note_id] = await knex("movie_notes").insert({
      title,
      description,
      rating,
      user_id,
    });

    const mvTags = tag.map(name => {
      return {
        note_id,
        user_id,
        name,
      };
    });

    await knex("movie_tags").insert(mvTags);

    return response.json();
  }

  async Show(request, response) {
    const { id } = request.params;

    const notes = await knex("movie_notes").where({ id }).first();
    const tags = await knex("movie_tags")
      .where({ note_id: id })
      .orderBy("name");

    return response.json({ ...notes, tags });
  }

  async Delete(request, response) {
    const { id } = request.params;

    await knex("movie_notes").where({ id }).delete();

    return response.json();
  }

  async Index(request, response) {
    const { title, user_id, movie_tags } = request.query;

    let notes;

    if (movie_tags) {
      const filterTags = movie_tags.split(",").map(tag => tag.trim());

      notes = await knex("movie_tags")
        .select(["movie_notes.id", "movie_notes.title", "movie_notes.user_id"])
        .where("movie_notes.user_id", user_id)
        .whereLike("movie_notes.title", `%${title}%`)
        .whereIn("name", filterTags)
        .innerJoin("movie_notes", "movie_notes.id", "movie_tags.note_id")
        .orderBy("movie_notes.title");
    } else {
      notes = await knex("movie_notes")
        .where({ user_id })
        .whereLike("title", `%${title}%`)
        .orderBy("title");
    }

    const userTags = await knex("movie_tags").where({ user_id });
    const notesWithTags = notes.map(note => {
      const notesTag = userTags.filter(tag => tag.note_id === note.id);

      return {
        ...notes,
        tag: notesTag,
      };
    });

    return response.json(notesWithTags);
  }
}

module.exports = NotesControllers;
