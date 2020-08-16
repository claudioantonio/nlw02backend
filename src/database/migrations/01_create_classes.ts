import Knex from 'knex';

// Instruções de alteração
export async function up(knex: Knex) {
    return knex.schema.createTable('classes', table => {
        table.increments('class_id').primary();
        table.string('subject').notNullable();
        table.decimal('cost').notNullable();

        table.integer('id')
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })
}

// Instruções de rollback
export async function down(knex: Knex) {
    return knex.schema.dropTable('classes');
}