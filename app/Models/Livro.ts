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

  @column()
  public perfilId:number
  @belongsTo(() => Perfil)
  public perfil: BelongsTo<typeof Perfil>


  // @column()
  // public obraId: number

  // @belongsTo(() => Obra)
  // public obra: BelongsTo<typeof Obra>

  @column()
  public isDeleted: boolean
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
