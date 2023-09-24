import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Perfil extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  @column()
  public nome: string


  @column()
  public password: string
  

  @column()
  public foto: string
  

  @column()
  public localizacao: string
  

  @column()
  public descricao: string
  

  @column()
  public email: string
  


  @column()
  public bloqueio: boolean
  

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
