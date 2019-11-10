const fs = require('fs');
const knex = require('../../db');

const schemas = [
  knex.schema.createTable('users', (table) => {
    table.increments('id')
    table.string('username').notNullable()
    table.string('password').notNullable()
    table.string('service').notNullable()
    table.text('cookies')
    table.enu('status', ['active', 'disabled', 'need_login', 'failed']).defaultTo('need_login').notNullable()
    table.enu('role', ['user', 'admin', 'super_admin']).defaultTo('user').notNullable()
    table.datetime('last_checked')
    table.timestamps()
  }),
  knex.schema.createTable('anatomies', (table) => {
    table.increments();
    table.text('title');
  }),
  knex.schema.createTable('brands', (table) => {
    table.increments();
    table.text('title');
  }),
  knex.schema.createTable('categories', (table) => {
    table.increments();
    table.text('title');
    table.text('description');
    table.text('faIcon');
  }),
  knex.schema.createTable('anatomy_types', (table) => {
    table.increments();
    table.text('title');
    table.integer('anatomy_id').references('anatomies.id');
  }),
  knex.schema.createTable('products', (table) => {
    table.increments();
    table.text('title');
    table.text('description');
    table.float('rating');
    table.float('prize');
    table.float('initial_prize');
    table.text('image');
    table.integer('brand_id').references('brands.id');
    table.text('thumb');
    table.text('flag');
  }),
  knex.schema.createTable('products_categories', (table) => {
    table.increments();
    table.integer('product_id').references('products.id');
    table.integer('category_id').references('categories.id');
  })
]

const drop = [
  knex.schema.dropTable('anatomy_types'),
  knex.schema.dropTable('anatomies'),
  knex.schema.dropTable('brands'),
  knex.schema.dropTable('categories'),
  knex.schema.dropTable('products'),
  knex.schema.dropTable('products'),
  knex.schema.dropTable('categories_products')
]

function generate_raw_sql(schemas) {
  return schemas.map(schema => schema.toSQL()[0].sql)
}

function write_to_file(file, data) {
  fs.writeFile(file, data, (err) => {
    if(err) {
      return console.log(err);
    }
    return console.log("The file was saved!");
  });
}

function main(schemas, file) {
  const raw_sql = generate_raw_sql(schemas)
  let res = ''
  raw_sql.forEach(element => {
    res += element + ';'
  });
  write_to_file(file, res)
}

main(schemas, 'migrations/sql/up.sql')
