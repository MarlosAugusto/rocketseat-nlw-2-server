import Knex from 'knex'

export const up = async (knex: Knex) =>
  knex.schema.createTable('connections', table => {
    table.increments('id').primary()

    table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')

    table.timestamp('created_at')
      .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
      .notNullable()
  })

export const down = async (knex: Knex) =>
  knex.schema.dropTable('connections')