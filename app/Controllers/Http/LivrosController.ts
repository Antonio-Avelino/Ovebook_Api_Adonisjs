import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Livro from "App/Models/Livro";
import Perfil from "App/Models/Perfil";
import BasesController from "./BasesController";
export default class LivrosController extends BasesController {
  public async index({ request, response }: HttpContextContract) {
    let dataPerfil = await Livro.all();
    return this.suceco({ data: dataPerfil, response });
  }

  public async store({ request, response, auth }: HttpContextContract) {
    let dataBody = request.all();

    let usuario = await auth.use("api").authenticate();

    let perfilId = await Perfil.find(usuario.id);

    dataBody.perfilId = usuario.id;

    if (!perfilId)
      return this.notFound({ response, mensagem: "o id perfil não existe" });
    
      let data= await Livro.create(dataBody)
      return this.write({ response, data, mensagem: null });
  }

  public async show({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
