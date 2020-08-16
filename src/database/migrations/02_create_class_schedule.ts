import Knex from 'knex';

// Instruções de alteração
export async function up(knex: Knex) {
    return knex.schema.createTable('class_schedule', table => {
        table.increments('id').primary();

        table.integer('week_day').notNullable(); // número de 0 a 6
        table.integer('from').notNullable();
        table.integer('to').notNullable();

        table.integer('class_id')
        .notNullable()
        .references('id')
        .inTable('classes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })
}

// Instruções de rollback
export async function down(knex: Knex) {
    return knex.schema.dropTable('class_schedule');
}