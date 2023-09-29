import { Users } from "@prisma/client";
import UseCases from "../../shared/UseCases";
import RepositoryUsers from "./RepositoryUsers";


export default class ListUsers implements UseCases<void, Users[]> {
  constructor(readonly repository: RepositoryUsers) {}
  execute(): Promise<Users[]> {
    return this.repository.listAll();
  }
}