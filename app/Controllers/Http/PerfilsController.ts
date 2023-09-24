import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Perfil from 'App/Models/Perfil'
import BasesController from './BasesController'
export default class PerfilsController extends BasesController {
  constructor(){
    super()
  }
  public async index({request,response}: HttpContextContract) {

    const data = await Perfil.all()
    return this.suceco({data:data,response})
  }

  public async store({request,response}: HttpContextContract) {
    const body = request.all()
    
    const data = await Perfil.create(body)

    return this.write({response,data,mensagem:null})
  }
  public async show({request,response,params}: HttpContextContract) {
      const idPrams = params.id
      try {
        const data = await Perfil.find(idPrams)

        if(!data){
          return this.notFound({response,mensagem:null})
        }
         return this.suceco({data:data,response})
       
      } catch (error) {
       
        return this.unknownError({response,mensagem:null})
      }
   
  }
  public async update({request,response,params}: HttpContextContract) {
    const idPrams = params.id
    const body = request.only(["nome"])
    let data =  await Perfil.find(idPrams)

      if(!data){
        return this.notFound({response,mensagem:null})
      }
       data.merge(body)
      .save() 
      return this.write({response,data,mensagem:"Atualizado com sucesso"})
    
  }

  public async destroy({request,response,params}: HttpContextContract) {

    try {
      
    const idPrams = params.id
    const data = await Perfil.find(idPrams)

    if(!data){
      return this.notFound({response,mensagem:null})
    }

    return this.write({response,data,mensagem:"Eliminado com sucesso"})
    } catch (error) {
      
      return this.unknownError({response,mensagem:null})
    }
  }

  async login({request,response,params,auth}: HttpContextContract){


    const email = request.input('email')
    const senha = request.input('senha')

try {
  
const token=   await auth.use('api').attempt(email,senha)

  return token
} catch (error) {

  
  console.log(error)
  return response.unauthorized("não autorizado")
  
}

  }

}
