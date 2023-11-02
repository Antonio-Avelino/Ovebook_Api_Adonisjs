import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class LogRequest {
  public async handle(
    { request,response ,auth}: HttpContextContract,
    next: () => Promise<void>
  ) 
  {

    const autenticaco = await auth.use('api').authenticate()


    
    console.log("meu dados",autenticaco.nome)
    // if (notAuthenticated) {
    //   response.unauthorized({ error: 'Must be logged in' })
    //   return
    // }
    // console.log(auth.use('api').user?.nome)
    
    // console.log("certo")
    // request.ctx="kjajd"
    // console.log(`-> ${request.method()}: ${request.url()}`)
    await next()
  }


}
