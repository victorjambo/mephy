exports.up = function (knex) {
  return Promise.all([
    knex.schema.createTable('products_categories', (table) => {
      table.string('id').primary()
      table.string('product_id').references('products.id');
      table.string('category_id').references('categories.id');
    })
  ])
}

exports.down = function (knex) {
  return Promise.all([
    knex.schema.dropTable('products_categories')
  ])
}
