/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
// import Database from '@ioc:Adonis/Lucid/Database'
import Empleado from 'App/Models/Empleado'

const pfx:string = "api/v1"

/**
 * @swagger
 * components:
 *  schemas:
 *    Task:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *          description: auto-generated id of the task
 *        name:
 *          type: string
 *          description: the name of the task
 *        description:
 *          type: string
 *          description: the description of the task
 */

/**
 * @swagger
 * tags:
 *  name: Task
 *  description: group of endpoints
 */

/**
 * @swagger
 * /:
 *  get:
 *    summary: Esto solo obtiene un string de prueba
 *    tags: [Task]
 *    responses:
 *      200: 
 *        description: Show user
 *        content: 
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Task'
 * 
 */

Route.get('/', async () => {
  return 'https://swagger.io/docs/specification/basic-structure/'
})
.middleware(async (ctx, next) =>{
  ctx.response.status(200).send("hello")
  await next()
})

Route.post('people', async () =>{
  console.log("hola")

  return await Empleado.query()
  .preload('contrato', contrato =>{
    contrato.where('id', '1')
  })
  .where('nombre', 'samuel')
}).prefix(pfx)