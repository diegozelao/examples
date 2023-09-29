import Elysia from "elysia";
import RegisterUsers from "../core/users/service/RegisterUsers";

export default class RegisterUsersController {
  constructor (
    readonly server: Elysia,
    readonly useCases: RegisterUsers
  ) {
    server.post('/users', async ({ body }) => {
      const { name, email, password } = body as any
      await this.useCases.execute({ name, email, password })

      return {
        status: 201,
        body: {
          message: 'Users created'
        }
      }
    })
  }
}