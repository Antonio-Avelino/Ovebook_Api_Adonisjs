import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Livro from "App/Models/Livro";
import Perfil from "App/Models/Perfil";
import Sumario from "App/Models/Sumario";
import BasesController from "./BasesController";
export default class LivrosController extends BasesController {
  public async index({ request, response }: HttpContextContract) {
    // let dataPerfil = await Livro.all();
    // let dataPerfil = await Livro.query()
    //   .where("is_deleted", false)
    //   .preload("perfil");

    let dataLivro = await Sumario.query()
    // .where('is_delete',false)
    .preload("livro")
    // .preload('livro',(perfil)=>{
    //   perfil.preload('perfil')
    // })

    return this.suceco({ data: dataLivro, response });
  }

  public async store({ request, response, auth }: HttpContextContract) {
    let dataBody = request.all();

    let usuario = await auth.use("api").authenticate();
    let perfilId = await Perfil.find(usuario.id);

    dataBody.perfilId = usuario.id;

    if (!perfilId)
      return this.notFound({ response, mensagem: "O id perfil não existe" });

    let data = await Livro.create(dataBody);
    return this.write({ response, data, mensagem: null });
  }

  public async show({ request, response, params }: HttpContextContract) {
    //  let livro = await Livro.find(params.id)
    let livro = await Livro.query()
      .where("is_deleted", false)
      .where("id", params.id)
      .preload("perfil")
      .first();

    if (!livro)
      return this.notFound({ response, mensagem: "id do livro não exite" });
    return this.suceco({ response, data: livro });
  }

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}

  public async inserirSumario({
    request,
    response,
    params,
  }: HttpContextContract) {
    let body = request.all();
    let livro = await Livro.find(params.id);
    body.id_livro= livro?.id

    if (!livro)      return this.notFound({ response, mensagem: "o livro não existe" });
    let data = await Sumario.create(body);
     return this.write({ response, data, mensagem: null });
  }
}
