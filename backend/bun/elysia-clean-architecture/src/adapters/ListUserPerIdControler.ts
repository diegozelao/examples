import Elysia from "elysia";
import ListUserPerId from "../core/users/service/ListUserPerId";

export default class ListUserPerIdController {
  constructor (
    readonly server: Elysia,
    readonly useCases: ListUserPerId
  ) {
    server.get('/users/:id', async ({ params }) => {
      return useCases.execute(+params.id)
    })
  }
}