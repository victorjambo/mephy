const ModelOperations = require('./operations');

class Products extends ModelOperations {
  constructor(...props) {
    super(...props);
    this.modelName = 'products'
  }
}

class Brands extends ModelOperations {
  constructor(...props) {
    super(...props);
    this.modelName = 'brands'
  }
}

class Categories extends ModelOperations {
  constructor(...props) {
    super(...props);
    this.modelName = 'categories'
  }
}

class Users extends ModelOperations {
  constructor(...props) {
    super(...props);
    this.modelName = 'users'
  }
}

class Anatomies extends ModelOperations {
  constructor(...props) {
    super(...props);
    this.modelName = 'anatomies'
  }
}

class AnatomyTypes extends ModelOperations {
  constructor(...props) {
    super(...props);
    this.modelName = 'anatomy_types'
  }
}

module.exports = {
  Products: new Products,
  Brands: new Brands,
  Categories: new Categories,
  Users: new Users,
  Anatomies: new Anatomies,
  AnatomyTypes: new AnatomyTypes,
};