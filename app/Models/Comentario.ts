import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Perfil from './Perfil'
import Livro from './Livro'

export default class Comentario extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public descricao:string

  @column()
  public perfilId:number

  @belongsTo(() => Perfil)
  public perfil: BelongsTo<typeof Perfil>

  @column()
  public livroId:number
  
  @belongsTo(() => Livro)
  public livro: BelongsTo<typeof Livro>;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
