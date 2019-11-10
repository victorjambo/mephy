exports.up = function (knex) {
  return Promise.all([
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
    })
  ])
}

exports.down = function (knex) {
  return Promise.all([
    knex.schema.dropTable('anatomies'),
    knex.schema.dropTable('brands'),
    knex.schema.dropTable('categories'),
    knex.schema.dropTable('users'),
  ])
}