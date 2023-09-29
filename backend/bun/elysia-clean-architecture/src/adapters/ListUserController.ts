import Elysia from "elysia";
import ListUsers from "../core/users/service/ListUsers";

export default class ListUsersControler {
  constructor (
    readonly server: Elysia,
    readonly useCases: ListUsers
  ) {
    server.get('/users', async () => {
      return useCases.execute()
    })
  }
}