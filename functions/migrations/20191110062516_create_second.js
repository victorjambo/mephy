exports.up = function (knex) {
  return Promise.all([
    knex.schema.createTable('anatomy_types', (table) => {
      table.string('id').primary()
      table.text('title');
      table.string('anatomy_id').references('anatomies.id');
    }),
    knex.schema.createTable('products', (table) => {
      table.string('id').primary()
      table.text('title');
      table.text('description');
      table.float('rating');
      table.float('prize');
      table.float('initial_prize');
      table.text('image');
      table.string('brand_id').references('brands.id');
      table.text('thumb');
      table.text('flag');
    })
  ])
}

exports.down = function (knex) {
  return Promise.all([
    knex.schema.dropTable('anatomy_types'),
    knex.schema.dropTable('products'),
  ])
}