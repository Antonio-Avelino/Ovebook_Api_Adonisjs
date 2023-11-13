import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import { BaseModel, column,beforeSave } from '@ioc:Adonis/Lucid/Orm'

export default class Perfil extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  @column()
  public nome: string


  @column({serializeAs: null})
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
  
  @beforeSave()
  public static async hashPassword (user: Perfil) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
