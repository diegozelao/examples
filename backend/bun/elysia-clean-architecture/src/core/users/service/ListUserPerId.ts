import { Users } from "@prisma/client";
import UseCases from "../../shared/UseCases";
import RepositoryUsers from "./RepositoryUsers";


export default class ListUserPerId implements UseCases<number, Users | null> {
  constructor(private readonly repository: RepositoryUsers) {}
  execute(id: number): Promise<Users | null> {
    return this.repository.listPerId(id)
  }

}