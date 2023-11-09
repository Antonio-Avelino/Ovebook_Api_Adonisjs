import Livro from "./Livro";
import { DateTime } from "luxon";
import { BaseModel, BelongsTo, belongsTo, column } from "@ioc:Adonis/Lucid/Orm";
export default class Sumario extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public subTitlo: string;

  @column()
  public descricao: string;
  @column()
  public livroId: number;
  @belongsTo(() => Livro)
  public Livro: BelongsTo<typeof Livro>;


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
