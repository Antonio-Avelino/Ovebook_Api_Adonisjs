import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Perfil from "App/Models/Perfil";
import BasesController from "./BasesController";
export default class PerfilsController extends BasesController {
  constructor() {
    super();
  }
  public async index({ request, response, auth }: HttpContextContract) {
    console.log("mey dados", auth.use("api").user?.nome);
    const data = await Perfil.all();
    return this.suceco({ data: data, response });
  }

  public async store({ request, response }: HttpContextContract) {
    const body = request.all();

    const data = await Perfil.create(body);

    return this.write({ response, data, mensagem: null });
  }
  public async show({ request, response, params }: HttpContextContract) {
    const idPrams = params.id;
    try {
      const data = await Perfil.find(idPrams);

      if (!data) {
        return this.notFound({ response, mensagem: null });
      }
      return this.suceco({ data: data, response });
    } catch (error) {
      return this.unknownError({ response, mensagem: null });
    }
  }
  public async update({ request, response, params,auth}: HttpContextContract) {
    const idPrams = params.id;
  let  autentication= await auth.use('api').authenticate()
  const body = request.only(["nome",'email','password','localizacao','descricao']);
    let data = await Perfil.find(autentication.id);

    if (!data) {
      return this.notFound({ response, mensagem: null });
    }
    data.merge(body).save();
    return this.write({ response, data, mensagem: "Atualizado com sucesso" });
  }

  public async destroy({ request, response, params }: HttpContextContract) {
    try {
      const idPrams = params.id;
      const data = await Perfil.find(params.id);

      if (!data) {
        return this.notFound({ response, mensagem: null });
      }
      await data.delete();
      return this.write({ response, data, mensagem: "Eliminado com sucesso" });
    } catch (error) {
      return this.unknownError({ response, mensagem: null });
    }
  }



  public async mostarPerfil(){

    return['ola munod como vai']
  }

}
