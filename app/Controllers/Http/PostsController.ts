// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PostsController {
/**
 * @swagger
 * /people:
 *  post:
 *    summary: Retorna un empleado
 *    tags: [Task]
 *    requestBody:
 *      required: true
 *      content:
 *          application/json:
 *              schema:
 *                  $ref: '#/components/schemas/Task'
 *    responses:
 *      200:
 *          description: the task succesful created
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Task'
 *      500:
 *          description: some server error
 */
    public async index() {
        return [
            {
                id: 1,
                title: 'Hello world',
            },
            {
                id: 2,
                title: 'Hello universe',
            },
        ]
    }
}
