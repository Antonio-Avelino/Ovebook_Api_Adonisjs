import Route from '@ioc:Adonis/Core/Route'



Route.group(()=>{

  // Route.get('/:idalidana', async ({auth}) => {
  //   console.log("nome produto",auth.use('api').user?.nome)
  //   console.log("id",auth.use('api').user?.id)
  //   return { hello: 'world' }
  // })
  // .middleware('login')

  Route.resource('/perfil','PerfilsController') .apiOnly()
  Route.get('/perfil/mostarPerfil','PerfilsController.mostarPerfil')
  
  Route.resource('/livros','LivrosController').apiOnly()
})

.middleware('login')
.prefix('/api')
// .middleware('auth')


Route.post('/login', async ({  auth, request, response  }) => {
  const email = request.input('email')
  const password = request.input('password')
  try {
    const token = await auth.use('api').attempt(email, password)
    return token
  } catch (error) {
    console.log(error )
    return response.unauthorized('não autorizado o projecto')
  }
})
