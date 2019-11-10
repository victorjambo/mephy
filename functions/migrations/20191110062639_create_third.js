exports.up = function (knex) {
  return Promise.all([
    knex.schema.createTable('products_categories', (table) => {
      table.increments();
      table.integer('product_id').references('products.id');
      table.integer('category_id').references('categories.id');
    })
  ])
}

exports.down = function (knex) {
  return Promise.all([
    knex.schema.dropTable('products_categories')
  ])
}