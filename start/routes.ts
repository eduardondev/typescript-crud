import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/', async () => {
    return { hello: 'world' }
  })

  Route.post('/login', 'LoginController.makeLogin')
  Route.post('/login/create', 'LoginController.createUser')

  Route.resource('/users', 'UsersController')
}).prefix('/api')
