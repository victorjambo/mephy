var knex = require('../../db');

class ModelOperations {
  constructor(modelName) {
    this.modelName = modelName
  }

  getAll() {
    return knex(this.modelName);
  }

  getOne(id) {
    return knex(this.modelName).where('id', id);
  }

  create(payload) {
    return knex(this.modelName)
      .returning('*')
      .insert(payload);
  }

  update(id, payload) {
    return knex(this.modelName)
      .where('id', id)
      .returning('*')
      .update(payload);
  }

  delete(id) {
    return knex(this.modelName)
      .where('id', id)
      .del();
  }
}

module.exports = ModelOperations;
