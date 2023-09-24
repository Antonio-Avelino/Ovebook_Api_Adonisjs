// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class BasesController {


            
            async suceco({response,data}){

                return response.status(200).json({

                    data:data,
                    total:data.length
                })
            }

            async write({response,data,mensagem}){


                return response.status(201).json({
                    mensagem:mensagem || 'sucecco',
                    data:data}
                )
            }

            badRequest({response,mensagem}){

                return response.status(400).json({
                    mensagem:mensagem || 'Algo correu mal',
                    })
            }

       async notFound({response,mensagem} ){

            return response.status(404).json({
                mensagem:mensagem || 'dados não encontrado',
                })
                
            }

       async unknownError({response,mensagem}){

        return response.status(500).json({
            mensagem:mensagem || 'erro no servidor',
            })
       }

}
