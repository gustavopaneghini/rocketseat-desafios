const knex = require("../database/knex");

class TagsControllers {
  async Index(request, response) {
    const { user_id } = request.params;

    const tags = await knex("movie_tags").where({ user_id });

    return response.json(tags);
  }
}

module.exports = TagsControllers;
