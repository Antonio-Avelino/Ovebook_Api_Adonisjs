import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class LivrosController {
  public async index({request,response}: HttpContextContract) {





    response.status(200).json({
      nome:"Antonio"
    })

  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
