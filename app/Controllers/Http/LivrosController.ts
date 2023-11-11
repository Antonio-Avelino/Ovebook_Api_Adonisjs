import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Livro from "App/Models/Livro";
import Perfil from "App/Models/Perfil";
import Sumario from "App/Models/Sumario";
import BasesController from "./BasesController";
import Avaliacao from "App/Models/Avaliacao";
import Comentario from "App/Models/Comentario";
import Categoria from "App/Models/Categoria";
export default class LivrosController extends BasesController {
  public async index({ request, response }: HttpContextContract) {
    let dataLivro = await Livro.query()
      .preload("perfil")
      .preload("sumarios")
      .preload("avaliacao");

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
    let livro = await Livro.query()
      .where("is_deleted", false)
      .where("id", params.id)
      .preload("perfil")
      .preload("sumarios")
      .preload("avaliacao", (query) => {
        query.preload("perfil");
      })
      .preload("comentario")
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

    if (!livro)
      return this.notFound({ response, mensagem: "o livro não existe" });
    body.livro_id = livro.id;

    let data = await Sumario.create(body);
    return this.write({ response, data, mensagem: null });
  }

  public async avaliar({
    request,
    response,
    params,
    auth,
  }: HttpContextContract) {
    let body = request.all();
    let perfil = await auth.use("api").authenticate();
    let livro = await Livro.find(params.id);

    if (!livro)
      return this.notFound({ response, mensagem: "o livro não existe" });
    body.perfil_id = perfil.id;
    body.livro_id = livro?.id;
    let inserir = await Avaliacao.create(body);
    return this.write({ response, data: inserir, mensagem: null });
  }

  public async comentar({
    request,
    response,
    params,
    auth,
  }: HttpContextContract) {
    let body = request.all();
    let perfil = await auth.use("api").authenticate();
    let livro = await Livro.find(params.id);

    if (!livro)
      return this.notFound({ response, mensagem: "o livro não existe" });
    body.perfil_id = perfil.id;
    body.livro_id = livro?.id;
    let inserir = await Comentario.create(body);
    return this.write({ response, data: inserir, mensagem: null });
  }

  public async addcategoria({
    request,
    response,
    params,
    auth,
  }: HttpContextContract) {
    let body = request.all();
    let pegarCategoria = await Categoria.findBy("nome", body.nome);

    if (pegarCategoria)
      return this.notFound({ response, mensagem: "a categoria ja existe" });
    let data = await Categoria.create(body);

    return this.write({ response, data, mensagem: null });
  }

  public async listarcategoria({
    request,
    response,
    params,
    auth,
  }: HttpContextContract) {
    let body = await Categoria.all();
    return this.suceco({ response, data: body });
  }
  public async listarCadaCategoria({
    request,
    response,
    params,
    auth,
  }: HttpContextContract) {

    console.log("id",params.id)
    let categoria = await Categoria.find(params.id);

    return this.suceco({ response, data: categoria });
  }
}
