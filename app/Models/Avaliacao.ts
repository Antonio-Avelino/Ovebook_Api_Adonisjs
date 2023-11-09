import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Livro from './Livro'
import Perfil from './Perfil'

export default class Avaliacao extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public numero:number

  @column()
  public livroId:number

  @belongsTo(() => Livro)
  public livro: BelongsTo<typeof Livro>;
  @column()

  public perfilId:number
  @belongsTo(() => Perfil)
  public perfil: BelongsTo<typeof Perfil>;
  @column()
  

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
