import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Perfil from './Perfil'
export default class Livro extends BaseModel {
  @column({ isPrimary: true })
  public id: number
 
  @column()
  public titlo:string
  @column()
  public capa:string
  @column()
  public descricao:string
  @column()
  public bloqueado: boolean
  @belongsTo(() => Perfil)
  public perfilId: BelongsTo<typeof Perfil>


  @column()
  public isDeleted: boolean
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
