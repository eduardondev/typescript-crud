import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UsersController {
  public async index() {
    return {
      mensagem: 'users rota',
    }
  }

  public async store() {
    return {
      mensagem: 'users rota',
    }
  }
}
