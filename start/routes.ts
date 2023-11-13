import Route from '@ioc:Adonis/Core/Route'



Route.group(()=>{


  Route.get('/perfil/mostarPerfil','PerfilsController.mostarPerfil')
  Route.post('/livros/:id/adicionar-sumario','LivrosController.inserirSumario')
  Route.post('/livros/:id/avaliar-livro','LivrosController.avaliar')
  Route.post('/livros/:id/comentar','LivrosController.comentar')
  Route.post('/livros/adicionar-categoria','LivrosController.addcategoria')
  Route.get('/livros/categoria','LivrosController.listarcategoria')
  Route.get('/livros/categoria/:id','LivrosController.listarCadaCategoria')

  
  Route.resource('/perfil','PerfilsController') .apiOnly()
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
