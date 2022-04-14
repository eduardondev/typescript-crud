import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async index() {
    const users = await User.all()

    return {
      mensagem: 'users rota',
      users,
    }
  }

  public async store() {
    return {
      mensagem: 'users rota',
    }
  }
}
