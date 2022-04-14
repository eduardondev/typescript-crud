import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from 'App/Models/User'

export default class LoginController {
  public async createUser({ request, response }: HttpContextContract) {
    const body = request.body()

    // return { body }

    const insertUser = await User.create(body)

    response.status(201)

    return {
      message: 'Usuário criado com sucesso',
      data: insertUser,
    }
  }

  public async makeLogin({ auth, request }: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')

    const token = await auth.attempt(email, password, {
      expiresIn: '6hours',
    })

    return {
      token,
    }
  }
}
