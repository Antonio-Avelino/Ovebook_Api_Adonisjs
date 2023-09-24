/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
import { async } from 'rxjs'


Route.group(()=>{

  Route.get('/', async () => {
    return { hello: 'world' }
  })
  
  Route.resource('/perfil','PerfilsController').apiOnly()
  // Route.post('/login','PerfilsController.login')

  Route.post('/login', async ({request,response,auth})=>{

    const email = request.input('email')
    const senha = request.input('password')

    console.log(senha)
    console.log(email)
  try {

    
  const token=   await auth.use('api').attempt(email,senha)
  
  return token
  } catch (error) {
  
  
  console.log(error)
  return response.unauthorized("não autorizado")
  
  }
  
  }
  

  )

  

}).prefix('/api')
