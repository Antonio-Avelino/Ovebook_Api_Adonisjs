import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class LogRequest {
  public async handle(    { request,params }: HttpContextContract,
    next: () => Promise<void>
  ) 
  {
// podes pefa a base de dado
    console.log("id)",params.idalidana)
    console.log("usuario")
    // console.log(`-> ${request.method()}: ${request.url()}`)
    await next()
  }


}
