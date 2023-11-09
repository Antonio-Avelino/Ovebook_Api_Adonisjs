import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, HasMany, belongsTo, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Perfil from './Perfil'
import Sumario from './Sumario'
import Avaliacao from './Avaliacao'
import Comentario from './Comentario'
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
  @hasMany(() => Sumario)
  public sumarios: HasMany<typeof Sumario>;

  @hasMany(() => Avaliacao)
  public avaliacao: HasMany<typeof Avaliacao>;
  
  @hasMany(() => Comentario)
  public comentario: HasMany<typeof Comentario>;
  
  
  @column()
  public isDeleted: boolean
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
