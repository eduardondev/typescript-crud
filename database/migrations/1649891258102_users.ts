import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Users extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('secretId')
      table.string('email').unique().notNullable()
      table.string('name').notNullable()
      table.string('password').notNullable()
      table.string('number').notNullable()
      table.string('city').notNullable()
      table.string('street')
      table.string('neighbourhood')
      table.string('state').notNullable()
      table.string('country').notNullable()
      table.boolean('isActive').defaultTo(1)
      table.boolean('isDisabled').defaultTo(0)
      table.timestamp('createdAt', { useTz: true })
      table.timestamp('updatedAt', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
